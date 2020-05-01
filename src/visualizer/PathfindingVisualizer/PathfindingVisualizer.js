import React, { useState, useEffect } from 'react';
import Node from './Node/Node';
import {dijkstra, getNodesInShortestPathOrder} from '../algorithms/dijkstra';
import './PathfindingVisualizer.css';

function PathfindingVisualizer(){

    const START_NODE_ROW = 10;
    const START_NODE_COL = 15;
    const FINISH_NODE_ROW = 10;
    const FINISH_NODE_COL = 35;

    const [grid, setGrid] = useState([]);
    const [mousePressed, setMousePress] = useState(false);

    const createNode = (row, col) => {
        return {
            row,
            col,
            isStart: row === START_NODE_ROW && col === START_NODE_COL,
            isFinish: row === FINISH_NODE_ROW && col === FINISH_NODE_COL,
            isWall: false,
            isVisited: false,
            distance: Infinity,
            previousNode: null,
        };
    };

    const getInitialGrid = () => {
        const grid = [];
        for(let row=0; row<20; row++){
            const currentRow = [];
            for(let col=0; col<50; col++){
                currentRow.push(createNode(row, col));
            }
            grid.push(currentRow);
        };
        return grid;
    };

    const getNewGridWithWallToggled = (grid, row, col) => {
        const newGrid = grid.slice();
        const node = newGrid[row][col];
        const newNode = {
            ...node,
            isWall : !node.isWall,
        };
        newGrid[row][col] = newNode;
        return newGrid;
    }

    const handleMouseUp = () => {
        setMousePress(false);
    }

    const handleMouseDown = (row, col) => {
        const newGrid = getNewGridWithWallToggled(grid, row, col);
        setGrid(newGrid);
        setMousePress(true);
    }

    const handleMouseEnter = (row, col) => {
        if(!mousePressed) return;
        const newGrid = getNewGridWithWallToggled(grid, row, col);
        setGrid(newGrid);
    }

    const animateShortestPath = (nodesInShortestPathOrder) => {
        for(let i = 0; i < nodesInShortestPathOrder.length; i++){
            setTimeout(() => {
                const node = nodesInShortestPathOrder[i];
                document.getElementById(`node-${node.row}-${node.col}`).className = 'node node-shortest-path';
            }, 50 * i);
        }
    }

    const animateDijkstra = (visitedNodesInOrder, nodesInShortestPathOrder) => {
        for(let i = 0; i <= visitedNodesInOrder.length; i++){
            if(i === visitedNodesInOrder.length){
                setTimeout(() => {
                    animateShortestPath(nodesInShortestPathOrder);
                }, 10 * i);
                return;
            }
            setTimeout(() => {
                const node = visitedNodesInOrder[i];
                document.getElementById(`node-${node.row}-${node.col}`).className = 'node node-visited';
            }, 10 * i);
        }
    }

    const visualizeDijkstra = () => {
        const startNode = grid[START_NODE_ROW][START_NODE_COL];
        const finishNode = grid[FINISH_NODE_ROW][FINISH_NODE_COL];
        const visitedNodesInOrder = dijkstra(grid, startNode, finishNode);
        const nodesInShortestPathOrder = getNodesInShortestPathOrder(finishNode);
        animateDijkstra(visitedNodesInOrder, nodesInShortestPathOrder);
    }

    useEffect(() => {
        const grid = getInitialGrid();
        setGrid(grid);
    }, []);

    return(
        <React.Fragment>
            <button onClick={() => visualizeDijkstra()}>
                Visualize Dijkstra
            </button>
            <div className="graph-grid">
                { grid.map((row, rowIdx) => {
                    return(
                        <div key={rowIdx}>
                            { row.map((node, nodeIdx) => {
                                const { row, col, isStart, isFinish, isWall } = node;
                                return(
                                    <Node
                                        key = {nodeIdx}
                                        row = {row}
                                        col = {col}
                                        isStart = {isStart}
                                        isFinish = {isFinish}
                                        isWall = {isWall}
                                        mousePressed = {mousePressed}
                                        onMouseUp = { () => handleMouseUp() }
                                        onMouseDown = { (row, col) => { handleMouseDown(row, col)} }
                                        onMouseEnter = { (row, col) => { handleMouseEnter(row, col) }}
                                    >
                                    </Node>
                                )
                            })}
                        </div>
                    )
                })}
            </div>
        </React.Fragment>
    );
}

export default PathfindingVisualizer;
