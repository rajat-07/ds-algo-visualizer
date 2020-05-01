import React, { useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import LinkedList from "../../data_structures/LinkedList/LinkedList";
import Stack from "../../data_structures/Stack/Stack";
import Queue from "../../data_structures/Queue/Queue";
import BST from "../../data_structures/BST/BST";
import RedBlackTree from "../../data_structures/RedBlackTree/RedBlackTree";
import Heap from "../../data_structures/Heap/Heap";
import Trie from "../../data_structures/Trie/Trie";
import Prism from "prismjs";
import './DataStructure.css'

function DataStructure() {

    let history = useHistory();

    const [currentDS, setDS] = useState("linked-list");

    useEffect(() => {
        history.push(`/${currentDS}`);
        Prism.highlightAll();
    }, []);

    const handleDS = e => {
        history.push(`/${e.target.value}`);
        setDS(e.target.value);
    };

    return (
        <React.Fragment className="ds-body">
            <div id="ds-dropdown-body">
                <select id="ds-dropdown" value={currentDS} onChange={handleDS}>
                    <option value="linked-list">Linked list</option>
                    <option value="stack">Stack</option>
                    <option value="queue">Queue</option>
                    <option value="bst">BST</option>
                    {/* <option value="red-black-tree">Red Black Tree</option> */}
                    <option value="heap">Heap</option>
                    <option value="trie">Trie</option>
                </select>
            </div>
            <Switch className="page-content" id="content">
                <Route path="/linked-list" component={LinkedList}></Route>
                <Route path="/stack" component={Stack}></Route>
                <Route path="/queue" component={Queue}></Route>
                <Route path="/bst" component={BST}></Route>
                <Route path="/heap" component={Heap}></Route>
                <Route path="/red-black-tree" component={RedBlackTree}></Route>
                <Route path="/trie" component={Trie}></Route>
            </Switch>
        </React.Fragment>
    );
}

export default DataStructure;
