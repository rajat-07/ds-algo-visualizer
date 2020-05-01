import React, { useState } from "react";
import { linkedlist_problems } from "../../codes/Linkedlist_problems";
import { codeMonk } from "../../codes/code_monk";
import Problem from "./Problem/Problem";
import "./Info.css";

function Info() {
  const [currentDSAlgo, setDSAlgo] = useState("linked-list");
  const [currentDifficulty, setDifficulty] = useState("standard");
  const [currCmTopic, setCmTopic] = useState(0);
  const cmTopics = ["Arrays & Strings", "Sorting", "Searching"];

  let topic;

  const handleDSAlgo = (e) => {
    setDSAlgo(e.target.value);
  };

  const handleDifficulty = (e) => {
    setDifficulty(e.target.value);
  };

  const handleCmPrevTopic = () => {
    if (currCmTopic == 0) {
      setCmTopic(codeMonk.length - 1);
      return;
    }
    setCmTopic(currCmTopic - 1);
  };

  const handleCmNextTopic = () => {
    if (currCmTopic == codeMonk.length - 1) {
      setCmTopic(0);
      return;
    }
    setCmTopic(currCmTopic + 1);
  };

  topic = <span>{cmTopics[currCmTopic]}</span>;

  return (
    <React.Fragment>
      <div id="problems-params">
        <select
          id="ds-algo-dropdown"
          value={currentDSAlgo}
          onChange={handleDSAlgo}
        >
          <option value="linked-list">Linked list</option>
          <option value="stack">Stack</option>
          <option value="dequeue">Dequeue</option>
          <option value="bst">BST</option>
          <option value="red-black-tree">Red Black Tree</option>
          <option value="trie">Trie</option>
          <option value="code-monk">Code Monk</option>
        </select>
        <select
          id="problems-difficulty"
          value={currentDifficulty}
          onChange={handleDifficulty}
        >
          <option value="standard">Standard</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </div>
      <div className="problems-body">
        <div>
          <i onClick={handleCmPrevTopic} class="fa fa-angle-left"></i> 
          &nbsp;&nbsp;&nbsp;
          {topic}
          &nbsp;&nbsp;&nbsp;
          <i onClick={handleCmNextTopic} class="fa fa-angle-right"></i>
        </div>
        {codeMonk[currCmTopic].map((prob, probIdx) => {
          return (
            <div>
              <Problem probIdx={probIdx} prob={prob} />
            </div>
          );
        })}
      </div>
      <h2>Info</h2>
    </React.Fragment>
  );
}

export default Info;
