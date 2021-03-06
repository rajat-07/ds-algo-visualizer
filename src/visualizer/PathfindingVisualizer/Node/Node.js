import React from 'react';
import './Node.css';

function Node(props) {

    const { row, col, isStart, isFinish, isWall, onMouseUp, onMouseDown, onMouseEnter } =  props;

    const extraClassName = isFinish ? 'node-finish' : isStart ? 'node-start' : isWall ? 'node-wall' : ' ';

    return(
        <div
            id={`node-${row}-${col}`}
            className={`node ${extraClassName}`}
            onMouseUp={() => { onMouseUp(row, col) }}
            onMouseDown={() => { onMouseDown(row, col) }}
            onMouseEnter={() => { onMouseEnter(row, col) }}
        >
        </div>
    )
}

export default Node;
