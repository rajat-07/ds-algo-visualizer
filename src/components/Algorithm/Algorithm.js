import React, { useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import Dijkstra from "../../algorithms/Dijkstra/Dijkstra";
import BFS from "../../algorithms/BFS/BFS";
import DFS from "../../algorithms/DFS/DFS";
import BubbleSort from "../../algorithms/BubbleSort/BubbleSort";
import Prism from "prismjs";
import './Algorithm.css'

function Algorithm() {

    let history = useHistory();

    const [currentAlgo, setAlgo] = useState("dijkstra");

    useEffect(() => {
        history.push(`/${currentAlgo}`);
        Prism.highlightAll();
    }, []);

    const handleAlgo = e => {
        history.push(`/${e.target.value}`);
        setAlgo(e.target.value);
    };

    return (
        <React.Fragment>
            <select id="algo-dropdown" value={currentAlgo} onChange={handleAlgo}>
                <option value="dijkstra">Dijkstra</option>
                <option value="bfs">BFS</option>
                <option value="dfs">DFS</option>
                <option value="bubble-sort">Bubble Sort</option>
            </select>
            <Switch className="page-content" id="content">
                <Route path="/dijkstra" component={Dijkstra}></Route>
                <Route path="/bfs" component={BFS}></Route>
                <Route path="/dfs" component={DFS}></Route>
                <Route path="/bubble-sort" component={BubbleSort}></Route>
            </Switch>
        </React.Fragment>
    );
}

export default Algorithm;