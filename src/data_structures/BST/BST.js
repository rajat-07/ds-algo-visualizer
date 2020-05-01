
/*

import React, { useState } from "react";
import BSTVisualizer from "../../visualizer/BSTVisualizer/BSTVisualizer";
import "./BST.css";
import clone from "clone";

let nodeStyle = {
  shape: "circle",
  shapeProps: { r: 15, fill: "#13c6e9" },
};

let nodeAnimatedStyle = {
  shape: "circle",
  shapeProps: { r: 15, fill: "purple" },
};

const debugData = {
  name: "1",
  nodeSvgShape: nodeStyle,
  className: "node",
  id: `node-${1}`,
  children: [
    {
      name: "null",
      className: "node",
      nodeSvgShape: nodeStyle,
    },
    {
      name: "null",
      className: "node",
      nodeSvgShape: nodeStyle,
    },
  ],
};

const containerStyles = {
  width: "100%",
  height: "100vh",
};

function BST() {
  let [data, setData] = useState(debugData);
  const [addValue, setAddValue] = useState("");
  const [removeValue, setRemoveValue] = useState("");
  let treeContainer;

  const handleAddValue = (e) => {
    setAddValue(e.target.value);
  };

  const handleRemoveValue = (e) => {
    setRemoveValue(e.target.value);
  };

  function sleep(delay) {
    var start = new Date().getTime();
    while (new Date().getTime() < start + delay);
  }

  // remove animation
  const removeAnimation = (nextData) => {
    if (!nextData) {
      return;
    }
    nextData.nodeSvgShape = nodeStyle;
    setData(nextData);
    if (!nextData.children) {
      return;
    }
    let nodeChild = nextData.children;
    removeAnimation(nodeChild[0]);
    removeAnimation(nodeChild[1]);
    setData(nextData);
  };

  // remove value
  const removeBST = () => {
    removeAnimation(data);
    const nextData = clone(data);
    let removeData = parseInt(removeValue);
    let targetTmp = nextData;
    let prev = targetTmp;
    while (true) {
      let parent = targetTmp;
      if (!targetTmp) {
        break;
      }
      if (targetTmp.name === "null") {
        break;
      }
      let currData = parseInt(targetTmp.name);
      console.log("current", currData);
      let leftChild, rightChild;
      if (targetTmp.children) {
        leftChild = targetTmp.children[0];
        rightChild = targetTmp.children[1];
      }
      if (currData == removeData) {
        // we found
        console.log("We found");
        if (leftChild.name === "null" && rightChild.name === "null") {
          console.log("remove direct");
          if (currData < parseInt(prev.name)) {
            prev.children[0].children = [];
            prev.children[0].name = "null";
          } else {
            prev.children[1].children = [];
            prev.children[1].name = "null";
          }
        } else if (leftChild.name === "null") {
          console.log("replace it with rightChild");
          if (currData < parseInt(prev.name)) {
            prev.children[0] = rightChild;
          } else {
            prev.children[1] = rightChild;
          }
        } else if (rightChild.name === "null") {
          console.log("replace it with leftChild");
          if (currData < parseInt(prev.name)) {
            prev.children[0] = leftChild;
          } else {
            prev.children[1] = leftChild;
          }
        } else {
          console.log("replace it with min of right tree");
          let tmp = targetTmp.children[1];
          let prev = tmp;
          let min;
          while (true) {
            // remove min right
            if (!tmp) {
              break;
            }
            if (tmp.name === "null") {
              break;
            }
            if (tmp.children[0].name === "null") {
              min = tmp.name;
              tmp.name = "null";
              tmp.children = [];
              break;
            }
            prev = tmp;
            tmp = tmp.children[0];
          }
          targetTmp.name = min;
          console.log(`${min}`);
        }
        break;
      } else if (currData > removeData) {
        // go to left
        prev = targetTmp;
        targetTmp = leftChild;
        console.log(`${currData}`);
      } else {
        // go to right
        prev = targetTmp;
        targetTmp = rightChild;
        console.log(`${currData}`);
      }
      if (!targetTmp) {
        break;
      }
    }
    setData(nextData);
    console.log(nextData);
  };

  // insert value
  const insertBST = () => {
    removeAnimation(data);
    const nextData = clone(data);
    let insertNode = {
      name: `${addValue}`,
      nodeSvgShape: nodeStyle,
      className: "node",
      id: `node-${addValue}`,
      children: [
        {
          name: `null`,
          className: "node",
          nodeSvgShape: nodeStyle,
        },
        {
          name: `null`,
          className: "node",
          nodeSvgShape: nodeStyle,
        },
      ],
    };
    let insertChild = parseInt(addValue);
    let targetTmp = nextData;
    let count = 0;
    let rmvtmp = [];
    let resNode;
    while (true) {
      let parent = targetTmp;
      parent.nodeSvgShape = nodeAnimatedStyle;
      setData(nextData);
      rmvtmp.push(parent);
      targetTmp = targetTmp.children;
      if (targetTmp) {
        if (insertChild < parseInt(parent.name)) {
          if (targetTmp[0].name == "null") {
            targetTmp[0] = insertNode;
            break;
          } else {
            count = count + 1000;
            targetTmp = targetTmp[0];
            continue;
          }
        } else if (insertChild > parseInt(parent.name)) {
          if (targetTmp[1].name == "null") {
            targetTmp[1] = insertNode;
            break;
          } else {
            count = count + 1000;
            targetTmp = targetTmp[1];
            continue;
          }
        } else {
          break;
        }
      } else {
        break;
      }
    }
    console.log(rmvtmp);
    console.log(resNode);
    setData(nextData);
  };

  return (
    <div style={containerStyles} ref={(tc) => (treeContainer = tc)}>
      <div>
        <input
          className="bstInsertIp"
          value={addValue}
          onChange={handleAddValue}
        />
        <button onClick={insertBST}>Insert BST</button>
        <input
          className="bstInsertIp"
          value={removeValue}
          onChange={handleRemoveValue}
        />
        <button onClick={removeBST}>Remove Node</button>
        <BSTVisualizer data={data} treeContainer={treeContainer} />
      </div>
    </div>
  );
}

export default BST;

*/

// https://codesandbox.io/s/jz1v7o2ryy?file=/Tree.js


import React, { useState, useEffect } from "react";
import "react-dropdown/style.css";
import BSTVisualizer from "../../visualizer/BSTVisualizer/BSTVisualizer";
import Prism from "prismjs";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/theme-monokai";
import $ from "jquery";
import {
  bst_insert_code_c,
  bst_insert_code_cpp,
  bst_insert_code_java,
  bst_insert_code_python,
  bst_remove_code_c,
  bst_remove_code_cpp,
  bst_remove_code_java,
  bst_remove_code_python,
  bst_search_code_c,
  bst_search_code_cpp,
  bst_search_code_java,
  bst_search_code_python
} from "../../codes/BST_code";
import "./BST.css";
import clone from "clone";

let nodeStyle = {
  shape: "circle",
  shapeProps: { r: 15, fill: "#13c6e9" },
};

let nodeAnimatedStyle = {
  shape: "circle",
  shapeProps: { r: 15, fill: "purple" },
};

const debugData = {
  name: "1",
  nodeSvgShape: nodeStyle,
  className: "node",
  id: `node-${1}`,
  children: [
    {
      name: "null",
      className: "node",
      nodeSvgShape: nodeStyle,
    },
    {
      name: "null",
      className: "node",
      nodeSvgShape: nodeStyle,
    },
  ],
};

const containerStyles = {
  width: "100%",
  height: "100vh",
};

function BST() {

  // other
  const [chosenLanguage, setLanguage] = useState("c");
  const [chosenMode, setMode] = useState("c_cpp");
  const [chosenOperation, setOperation] = useState("insert");

  // bst
  let [data, setData] = useState(debugData);
  const [addValue, setAddValue] = useState("");
  const [removeValue, setRemoveValue] = useState("");
  const [searchValue, setSearchValue] = useState("");
  let treeContainer;
 
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

  const handleAddValue = (e) => {
    setAddValue(e.target.value);
  };

  const handleRemoveValue = (e) => {
    setRemoveValue(e.target.value);
  };

  const handleSearchValue = (e) => {
    setSearchValue(e.target.value);
  };

  // remove animation

  const removeAnimation = (nextData) => {
    if (!nextData) {
      return;
    }
    nextData.nodeSvgShape = nodeStyle;
    setData(nextData);
    if (!nextData.children) {
      return;
    }
    let nodeChild = nextData.children;
    removeAnimation(nodeChild[0]);
    removeAnimation(nodeChild[1]);
    setData(nextData);
  };

  // insert funcn

  const insertBST = () => {
    removeAnimation(data);
    const nextData = clone(data);
    let insertNode = {
      name: `${addValue}`,
      nodeSvgShape: nodeStyle,
      className: "node",
      id: `node-${addValue}`,
      children: [
        {
          name: `null`,
          className: "node",
          nodeSvgShape: nodeStyle,
        },
        {
          name: `null`,
          className: "node",
          nodeSvgShape: nodeStyle,
        },
      ],
    };
    let insertChild = parseInt(addValue);
    let targetTmp = nextData;
    let count = 0;
    let rmvtmp = [];
    let resNode;
    while (true) {
      let parent = targetTmp;
      parent.nodeSvgShape = nodeAnimatedStyle;
      setData(nextData);
      rmvtmp.push(parent);
      targetTmp = targetTmp.children;
      if (targetTmp) {
        if (insertChild < parseInt(parent.name)) {
          if (targetTmp[0].name == "null") {
            targetTmp[0] = insertNode;
            break;
          } else {
            count = count + 1000;
            targetTmp = targetTmp[0];
            continue;
          }
        } else if (insertChild > parseInt(parent.name)) {
          if (targetTmp[1].name == "null") {
            targetTmp[1] = insertNode;
            break;
          } else {
            count = count + 1000;
            targetTmp = targetTmp[1];
            continue;
          }
        } else {
          break;
        }
      } else {
        break;
      }
    }
    console.log(rmvtmp);
    console.log(resNode);
    setData(nextData);
  };

  // remove funcn

  const removeBST = () => {
    removeAnimation(data);
    const nextData = clone(data);
    let removeData = parseInt(removeValue);
    let targetTmp = nextData;
    let prev = targetTmp;
    while (true) {
      let parent = targetTmp;
      if (!targetTmp) {
        break;
      }
      if (targetTmp.name === "null") {
        break;
      }
      let currData = parseInt(targetTmp.name);
      console.log("current", currData);
      let leftChild, rightChild;
      if (targetTmp.children) {
        leftChild = targetTmp.children[0];
        rightChild = targetTmp.children[1];
      }
      if (currData == removeData) {
        // we found
        console.log("We found");
        if (leftChild.name === "null" && rightChild.name === "null") {
          console.log("remove direct");
          if (currData < parseInt(prev.name)) {
            prev.children[0].children = [];
            prev.children[0].name = "null";
          } else {
            prev.children[1].children = [];
            prev.children[1].name = "null";
          }
        } else if (leftChild.name === "null") {
          console.log("replace it with rightChild");
          if (currData < parseInt(prev.name)) {
            prev.children[0] = rightChild;
          } else {
            prev.children[1] = rightChild;
          }
        } else if (rightChild.name === "null") {
          console.log("replace it with leftChild");
          if (currData < parseInt(prev.name)) {
            prev.children[0] = leftChild;
          } else {
            prev.children[1] = leftChild;
          }
        } else {
          console.log("replace it with min of right tree");
          let tmp = targetTmp.children[1];
          let prev = tmp;
          let min;
          while (true) {
            // remove min right
            if (!tmp) {
              break;
            }
            if (tmp.name === "null") {
              break;
            }
            if (tmp.children[0].name === "null") {
              min = tmp.name;
              tmp.name = "null";
              tmp.children = [];
              break;
            }
            prev = tmp;
            tmp = tmp.children[0];
          }
          targetTmp.name = min;
          console.log(`${min}`);
        }
        break;
      } else if (currData > removeData) {
        // go to left
        prev = targetTmp;
        targetTmp = leftChild;
        console.log(`${currData}`);
      } else {
        // go to right
        prev = targetTmp;
        targetTmp = rightChild;
        console.log(`${currData}`);
      }
      if (!targetTmp) {
        break;
      }
    }
    setData(nextData);
    console.log(nextData);
  };

  // search funcn

  const searchBST = () => {
    console.log(`Search ${searchValue}`);
  }

  // params
  let currParams;

  if (chosenOperation === "insert") {
    currParams = (
      <div class="input-label-group">
        <label for="add-value">Enter &nbsp; value &nbsp; :</label>
        <input className="field" onChange={handleAddValue} value={addValue} name="add-value" id="add-value" />
        <button onClick={insertBST}>Insert</button>
      </div>
    );
  } else if (chosenOperation === "remove") {
    currParams = (
      <div class="input-label-group">
        <label for="remove-value">Enter &nbsp; value &nbsp; :</label>
        <input className="field" onChange={handleRemoveValue} value={removeValue} name="remove-value" id="remove-value" />
        <button onClick={removeBST}>Remove</button>
      </div>
    );
  } else if (chosenOperation === "search") {
    currParams = (
      <div class="input-label-group">
        <label for="search-value">Enter &nbsp; value &nbsp; :</label>
        <input className="field" onChange={handleSearchValue} value={searchValue} name="search-value" id="search-value"/>
        <button onClick={searchBST}>Search</button>
      </div>
    );
  }

  let codeStatus;
  codeStatus = `bst_${chosenOperation}_code_${chosenLanguage}`;
  let currentCode;

  if (codeStatus === "bst_insert_code_c") {
    currentCode = bst_insert_code_c;
  } else if (codeStatus === "bst_insert_code_cpp") {
    currentCode = bst_insert_code_cpp;
  } else if (codeStatus === "bst_insert_code_java") {
    currentCode = bst_insert_code_java;
  } else if (codeStatus === "bst_insert_code_python") {
    currentCode = bst_insert_code_python;
  } else if (codeStatus === "bst_remove_code_c") {
    currentCode = bst_remove_code_c;
  } else if (codeStatus === "bst_remove_code_cpp") {
    currentCode = bst_remove_code_cpp;
  } else if (codeStatus === "bst_remove_code_java") {
    currentCode = bst_remove_code_java;
  } else if (codeStatus === "bst_remove_code_python") {
    currentCode = bst_remove_code_python;
  } else if (codeStatus === "bst_search_code_c") {
    currentCode = bst_search_code_c;
  } else if (codeStatus === "bst_search_code_cpp") {
    currentCode = bst_search_code_cpp;
  } else if (codeStatus === "bst_search_code_java") {
    currentCode = bst_search_code_java;
  } else if (codeStatus === "bst_search_code_python") {
    currentCode = bst_search_code_python;
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
              <option value="remove">Remove</option>
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
                  // onLoad={this.onLoad}
                  // onChange={this.onChange}
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
          <h2>BST Visualizer</h2>
          <BSTVisualizer data={data} />
        </div>
      </div>
    </React.Fragment>
  );
}

export default BST;

