import React, { useState, useEffect } from "react";
import "react-dropdown/style.css";
import LinkedListVisualizer from "../../visualizer/LinkedListVisualizer/LinkedListVisualizer";
import Prism from "prismjs";
import AceEditor from "react-ace";
import pointerLogo from "../../images/link.png";
import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/theme-monokai";
import $ from "jquery";
import {
  linked_list_set_code_c,
  linked_list_set_code_cpp,
  linked_list_set_code_java,
  linked_list_set_code_python,
  linked_list_insert_code_c,
  linked_list_insert_code_cpp,
  linked_list_insert_code_java,
  linked_list_insert_code_python,
  linked_list_add_code_c,
  linked_list_add_code_cpp,
  linked_list_add_code_java,
  linked_list_add_code_python,
  linked_list_remove_index_code_c,
  linked_list_remove_index_code_cpp,
  linked_list_remove_index_code_java,
  linked_list_remove_index_code_python,
  linked_list_remove_data_code_c,
  linked_list_remove_data_code_cpp,
  linked_list_remove_data_code_java,
  linked_list_remove_data_code_python,
} from "../../codes/LinkedList_code";
import "./LinkedList.css";

function Stack() {
  const [chosenLanguage, setLanguage] = useState("c");
  const [chosenMode, setMode] = useState("c_cpp");
  const [chosenOperation, setOperation] = useState("set");
  const [addIndex, setAddIndex] = useState(0);
  const [addData, setAddData] = useState(1);
  const [setIndex, setSetIndex] = useState(0);
  const [setData, setSetData] = useState(1);
  const [insertData, setInsertData] = useState(1);
  const [removeIndexData, setRemoveIndexData] = useState(1);
  const [removeDataData, setRemoveDataData] = useState(1);

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

  // add

  const handleAddData = (e) => {
    setAddData(e.target.value);
  };

  const handleAddIndex = (e) => {
    setAddIndex(e.target.value);
  };

  // set

  const handleSetData = (e) => {
    setSetData(e.target.value);
  };

  const handleSetIndex = (e) => {
    setSetIndex(e.target.value);
  };

  // insert

  const handleInsertData = (e) => {
    setInsertData(e.target.value);
  };

  // remove 

  const handleRemoveIndex = (e) => {
    setRemoveIndexData(e.target.value);
  };

  const handleRemoveData = (e) => {
    setRemoveDataData(e.target.value);
  };

  let list = document.getElementById("list");
  let nodes = document.getElementsByClassName("ll-node");
  let pointers = document.getElementsByClassName("pointer");

  let nodeAnimationTimeout = 1000;
  let pointerAnimationTimeout = 800;
  let deleteTimeout = 800;

  function animateNode(i) {
    return new Promise((resolve) => {
      nodes[i].style.animation =
        "highlightNode " + nodeAnimationTimeout / 1000 + "s " + "ease";
      setTimeout(() => {
        nodes[i].style.animation = null;
        resolve();
      }, nodeAnimationTimeout);
    });
  }

  function animatePointer(i) {
    return new Promise((resolve) => {
      pointers[i].style.animation =
        "highlightPointer " + pointerAnimationTimeout / 1000 + "s " + "ease";
      setTimeout(() => {
        pointers[i].style.animation = null;
        resolve();
      }, pointerAnimationTimeout);
    });
  }

  async function animateNodes(from, to) {
    for (let i = from; i <= to; i++) {
      await animateNode(i);
      await animatePointer(i);
    }
  }

  async function add(i, data) {
    let node = document.createElement("div");
    node.classList.add("ll-node");

    let number = document.createElement("p");
    number.classList.add("number");

    let text = document.createTextNode(data);

    number.appendChild(text);
    node.appendChild(number);

    let pointer = document.createElement("div");
    pointer.classList.add("pointer");
    pointer.style.opacity = "0";

    let img = document.createElement("img");
    // console.log(pointerLogo);
    img.src = `${pointerLogo}`;
    console.log(img);

    pointer.appendChild(img);

    if (i === nodes.length) {
      await animateNodes(0, nodes.length - 1);
      list.appendChild(node);
      list.appendChild(pointer);
    } else {
      await animateNodes(0, i - 1);
      list.insertBefore(pointer, nodes[i]);
      list.insertBefore(node, pointer);
    }

    node.style.animation =
      "grow " + nodeAnimationTimeout / 1000 + "s " + "ease";

    setTimeout(() => {
      pointer.style.opacity = 1;
      pointer.style.animation =
        "slide " + pointerAnimationTimeout / 1000 + "s " + "ease";
    }, nodeAnimationTimeout);
  }

  // set

  async function set(i, data) {
    let numberAnimationTimeOut = 1000;

    await animateNodes(0, i - 1);

    nodes[i].firstChild.style.animation =
      "fadeNumberOut " + numberAnimationTimeOut / 1000 + "s " + "ease";

    setTimeout(() => {
      nodes[i].firstChild.innerHTML = data;
      nodes[i].firstChild.style.animation =
        "fadeNumberIn " + numberAnimationTimeOut / 1000 + "s " + "ease";
    }, numberAnimationTimeOut);

    setTimeout(() => {
      nodes[i].firstChild.style.animation = null;
    }, numberAnimationTimeOut * 2);
  }

  // remove

  function deleteNode(i) {
    return new Promise((resolve) => {
      nodes[i].style.animation =
        "deleteNode " + deleteTimeout / 1000 + "s ease";
      pointers[i].style.animation =
        "deletePointer " + deleteTimeout / 1000 + "s ease";
      setTimeout(() => {
        list.removeChild(nodes[i]);
        list.removeChild(pointers[i]);
        resolve();
      }, deleteTimeout);
    });
  }

  async function removeIndex(i) {
    await animateNodes(0, i - 1);
    deleteNode(i);
  }

  function removeData(data) {
    removeRecursively(0, data);
  }

  async function removeRecursively(i, data) {
    if (i >= nodes.length) {
      return;
    } else if (nodes[i].firstChild.innerHTML == data) {
      await deleteNode(i);
      removeRecursively(i, data);
    } else {
      await animateNode(i);
      await animatePointer(i);
      removeRecursively(i + 1, data);
    }
  }

  // params
  let currParams;

  if (chosenOperation === "add") {
    currParams = (
      <div>
        <div>
          <label>Enter index</label>
          <input value={addIndex} onChange={handleAddIndex} />
        </div>
        <div>
          <label>Enter data</label>
          <input value={addData} onChange={handleAddData} />
        </div>
        <button
          onClick={() => {
            add(addIndex, addData);
          }}
        >
          Add
        </button>
      </div>
    );
  } else if (chosenOperation === "set") {
    currParams = (
      <div>
        <div>
          <label>Enter index</label>
          <input value={setIndex} onChange={handleSetIndex} />
        </div>
        <div>
          <label>Enter data</label>
          <input value={setData} onChange={handleSetData} />
        </div>
        <button
          onClick={() => {
            set(setIndex, setData);
          }}
        >
          Set
        </button>
      </div>
    );
  } else if (chosenOperation === "insert") {
    currParams = (
      <div>
        <div>
          <label>Enter data</label>
          <input value={insertData} onChange={handleInsertData} />
        </div>
        <button
          onClick={() => {
            add(nodes.length, insertData);
          }}
        >
          Insert
        </button>
      </div>
    );
  } else if (chosenOperation === "remove_index") {
    currParams = (
      <div>
        <div>
          <label>Enter data</label>
          <input value={removeIndexData} onChange={handleRemoveIndex} />
        </div>
        <button
          onClick={() => {
            removeIndex(removeIndexData);
          }}
        >
          Remove
        </button>
      </div>
    );
  } else if (chosenOperation === "remove_data") {
    currParams = (
      <div>
        <div>
          <label>Enter data</label>
          <input value={removeDataData} onChange={handleRemoveData} />
        </div>
        <button
          onClick={() => {
            removeData(removeDataData)
          }}
        >
          Remove
        </button>
      </div>
    );
  }

  let codeStatus;
  codeStatus = `linked_list_${chosenOperation}_code_${chosenLanguage}`;
  let currentCode;

  if (codeStatus === "linked_list_set_code_c") {
    currentCode = linked_list_set_code_c;
  } else if (codeStatus === "linked_list_set_code_cpp") {
    currentCode = linked_list_set_code_cpp;
  } else if (codeStatus === "linked_list_set_code_java") {
    currentCode = linked_list_set_code_java;
  } else if (codeStatus === "linked_list_set_code_python") {
    currentCode = linked_list_set_code_python;
  } else if (codeStatus === "linked_list_insert_code_c") {
    currentCode = linked_list_insert_code_c;
  } else if (codeStatus === "linked_list_insert_code_cpp") {
    currentCode = linked_list_insert_code_cpp;
  } else if (codeStatus === "linked_list_insert_code_java") {
    currentCode = linked_list_insert_code_java;
  } else if (codeStatus === "linked_list_insert_code_python") {
    currentCode = linked_list_insert_code_python;
  } else if (codeStatus === "linked_list_add_code_c") {
    currentCode = linked_list_add_code_c;
  } else if (codeStatus === "linked_list_add_code_cpp") {
    currentCode = linked_list_add_code_cpp;
  } else if (codeStatus === "linked_list_add_code_java") {
    currentCode = linked_list_add_code_java;
  } else if (codeStatus === "linked_list_add_code_python") {
    currentCode = linked_list_add_code_python;
  } else if (codeStatus === "linked_list_remove_index_code_c") {
    currentCode = linked_list_remove_index_code_c;
  } else if (codeStatus === "linked_list_remove_index_code_cpp") {
    currentCode = linked_list_remove_index_code_cpp;
  } else if (codeStatus === "linked_list_remove_index_code_java") {
    currentCode = linked_list_remove_index_code_java;
  } else if (codeStatus === "linked_list_remove_index_code_python") {
    currentCode = linked_list_remove_index_code_python;
  } else if (codeStatus === "linked_list_remove_data_code_c") {
    currentCode = linked_list_remove_data_code_c;
  } else if (codeStatus === "linked_list_remove_data_code_cpp") {
    currentCode = linked_list_remove_data_code_cpp;
  } else if (codeStatus === "linked_list_remove_data_code_java") {
    currentCode = linked_list_remove_data_code_java;
  } else if (codeStatus === "linked_list_remove_data_code_python") {
    currentCode = linked_list_remove_data_code_python;
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
              <option value="set">Set</option>
              <option value="insert">Insert</option>
              <option value="add">Add</option>
              <option value="remove_index">Remove By Index</option>
              <option value="remove_data">Remove By Data</option>
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
          <h2>Linked list Visualizer</h2>
          <LinkedListVisualizer />
        </div>
      </div>
    </React.Fragment>
  );
}

export default Stack;
