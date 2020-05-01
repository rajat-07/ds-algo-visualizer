/*
import React, { useState, useEffect } from "react";
import Tree from "react-d3-tree";
import TrieVisualizer from '../../visualizer/TrieVisualizer/TrieVisualizer';
import clone from "clone";
import "./Trie.css";

let nodeStyle = {
  shape: "circle",
  shapeProps: { r: 15, fill: "#13c6e9" },
};

let nodeAnimatedStyle = {
  shape: "circle",
  shapeProps: { r: 15, fill: "purple" },
}

const debugData = {
  name: "1",
  nodeSvgShape: nodeStyle,
  className: "node",
  id: `node-${1}`,
  children: [
    // {
    //   name: "null",
    //   className: "node",
    //   nodeSvgShape: nodeStyle,
    // },
    // {
    //   name: "null",
    //   className: "node",
    //   nodeSvgShape: nodeStyle,
    // },
  ],
};

function Trie() {

  const [trieData, setTrieData] = useState("cat crow cow");
  const [data, setData] = useState(debugData);
  const [word, setWord] = useState("");

  const handleWord = (e) => {
    setWord(e.target.value);
  }

  const insertWord = () => {
    let w = word;
    const nextData = clone(data);
    let targetTmp = nextData;
    targetTmp = targetTmp.children;
    for(let idx=0; idx<w.length; idx++){
      let ch = w[idx];
      let flag = 1;
      for(let c=0; c<targetTmp.length; c++){
        if(targetTmp[c].name == ch && flag == 1){
          targetTmp = targetTmp[c].children;
          flag = 0;
          // continue;
        }
      }
      if(flag == 0){
        continue;
      }
      let newNode = {
        name: `${ch}`,
        nodeSvgShape: nodeStyle,
        className: "node",
        id: `node-${ch}`,
        children: [],
      }
      targetTmp.push(newNode);
      targetTmp = newNode.children;
    }
    console.log(nextData);
    setData(nextData);
  }

  const handleTrieData = (e) => {
    setTrieData(e.target.value);
    let latestTrieData = e.target.value;
    let words = latestTrieData.split(" ");
    let n = words.length;
    const nextData = clone(data);
    let maxlen = 0;
    for(let i=0; i<words.length; i++){
      maxlen = words[i].length > maxlen ? words[i].length : maxlen;
    }
    setData(nextData);
  }

  return (
    <div>
      <h2>Trie</h2>
      <div id="trie-data-input-wrapper">
        <input className="trie-data-input" type="text" value={trieData} width="48" height="48" onChange={handleTrieData} />
        <input type="text" value={word} onChange={handleWord} />
        <button onClick={insertWord}>Add</button>
      </div>
      <TrieVisualizer data={data} />
    </div>
  );
}

export default Trie;

*/

import React, { useState, useEffect } from "react";
import "react-dropdown/style.css";
import TrieVisualizer from "../../visualizer/TrieVisualizer/TrieVisualizer";
import Prism from "prismjs";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/theme-monokai";
import $ from "jquery";
import {
  trie_insert_code_c,
  trie_insert_code_cpp,
  trie_insert_code_java,
  trie_insert_code_python,
  trie_search_code_c,
  trie_search_code_cpp,
  trie_search_code_java,
  trie_search_code_python,
} from "../../codes/Trie_code";
import clone from "clone";
import "./Trie.css";

let nodeStyle = {
  shape: "circle",
  shapeProps: { r: 15, fill: "#13c6e9" },
};

let nodeAnimatedStyle = {
  shape: "circle",
  shapeProps: { r: 15, fill: "purple" },
}

const debugData = {
  name: "1",
  nodeSvgShape: nodeStyle,
  className: "node",
  id: `node-${1}`,
  children: [],
};

function Trie() {
  // other
  const [chosenLanguage, setLanguage] = useState("c");
  const [chosenMode, setMode] = useState("c_cpp");
  const [chosenOperation, setOperation] = useState("insert");

  // trie
  const [data, setData] = useState(debugData);
  const [word, setWord] = useState("");
  const [targetWord, setTargetWord] = useState("");

  useEffect(() => {
    Prism.highlightAll();
    $(`#${chosenLanguage}`).addClass("lang-active");
  }, [chosenOperation, chosenLanguage]);

  const handleLanguage = (e) => {
    $("*").removeClass("lang-active");
    $(`#${e.target.value}`).addClass("lang-active");
    setLanguage(e.target.value);
    if (e.target.value === "c" || e.target.value === "cpp") {
      setMode("c_cpp");
    } else {
      setMode(e.target.value);
    }
  };

  const handleOperation = (e) => {
    setOperation(e.target.value);
  };

  const handleWord = (e) => {
    setWord(e.target.value);
  };

  const handleTargetWord = (e) => {
    setTargetWord(e.target.value);
  };

  // add word
  const insertWord = () => {
    let w = word;
    const nextData = clone(data);
    let targetTmp = nextData;
    targetTmp = targetTmp.children;
    for (let idx = 0; idx < w.length; idx++) {
      let ch = w[idx];
      let flag = 1;
      for (let c = 0; c < targetTmp.length; c++) {
        if (targetTmp[c].name == ch && flag == 1) {
          targetTmp = targetTmp[c].children;
          flag = 0;
          // continue;
        }
      }
      if (flag == 0) {
        continue;
      }
      let newNode = {
        name: `${ch}`,
        nodeSvgShape: nodeStyle,
        className: "node",
        id: `node-${ch}`,
        children: [],
      };
      targetTmp.push(newNode);
      targetTmp = newNode.children;
    }
    console.log(nextData);
    setData(nextData);
  };

  // search word
  const searchWord = () => {
    console.log(`search ${targetWord}`);
  }

  // params
  let currParams;

  if (chosenOperation === "insert") {
    currParams = (
      <div class="input-label-group">
        <label for="insert-value">Enter &nbsp; value &nbsp; :</label>
        <input
          className="field"
          onChange={handleWord}
          value={word}
          name="insert-value"
          id="insert-value"
        />
        <button onClick={insertWord}>Insert</button>
      </div>
    );
  } else if (chosenOperation === "search") {
    currParams = (
      <div class="input-label-group">
        <label for="search-value">Enter &nbsp; value &nbsp; :</label>
        <input
          className="field"
          onChange={handleTargetWord}
          value={targetWord}
          name="search-value"
          id="search-value"
        />
        <button onClick={searchWord}>Search</button>
      </div>
    );
  }

  let codeStatus;
  codeStatus = `trie_${chosenOperation}_code_${chosenLanguage}`;
  let currentCode;

  if (codeStatus === "trie_insert_code_c") {
    currentCode = trie_insert_code_c;
  } else if (codeStatus === "trie_insert_code_cpp") {
    currentCode = trie_insert_code_cpp;
  } else if (codeStatus === "trie_insert_code_java") {
    currentCode = trie_insert_code_java;
  } else if (codeStatus === "trie_insert_code_python") {
    currentCode = trie_insert_code_python;
  } else if (codeStatus === "trie_search_code_c") {
    currentCode = trie_search_code_c;
  } else if (codeStatus === "trie_search_code_cpp") {
    currentCode = trie_search_code_cpp;
  } else if (codeStatus === "trie_search_code_java") {
    currentCode = trie_search_code_java;
  } else if (codeStatus === "trie_search_code_python") {
    currentCode = trie_search_code_python;
  }

  return (
    <React.Fragment>
      <div class="main-section">
        <div class="code-param-section">
          <div class="param-section">
            <p className="param-header">Parameters</p>
            <select
              id="stack-dropdown"
              value={chosenOperation}
              onChange={handleOperation}
            >
              <option value="insert">Insert</option>
              <option value="search">Search</option>
            </select>
            {currParams}
          </div>
          <div class="code-section">
            <pre>
              <div className="lang-section">
                <button
                  onClick={handleLanguage}
                  id="c"
                  value="c"
                  class="language-option"
                >
                  C
                </button>
                <button
                  onClick={handleLanguage}
                  id="cpp"
                  value="cpp"
                  class="language-option"
                >
                  C++
                </button>
                <button
                  onClick={handleLanguage}
                  id="java"
                  value="java"
                  class="language-option"
                >
                  Java
                </button>
                <button
                  onClick={handleLanguage}
                  id="python"
                  value="python"
                  class="language-option"
                >
                  Python
                </button>
              </div>
              <div className="code-editor-wrapper">
                <AceEditor
                  className="static-code-editor"
                  placeholder="Placeholder Text"
                  mode={chosenMode}
                  theme="monokai"
                  name="blah2"
                  fontSize={14}
                  showPrintMargin={false}
                  readOnly={true}
                  showGutter={false}
                  highlightActiveLine={false}
                  value={currentCode}
                  tabSize={2}
                />
              </div>
            </pre>
          </div>
        </div>
        <div class="visualizer-section">
          <h2>Trie Visualizer</h2>
          <TrieVisualizer data={data} />
        </div>
      </div>
    </React.Fragment>
  );
}

export default Trie;
