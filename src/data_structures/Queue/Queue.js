import React, { useState, useEffect } from "react";
import "react-dropdown/style.css";
import QueueVisualizer from '../../visualizer/QueueVisualizer/QueueVisualizer';
import Prism from "prismjs";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/theme-monokai";
import $ from "jquery";
import {
  queue_enqueue_code_c,
  queue_enqueue_code_cpp,
  queue_enqueue_code_java,
  queue_enqueue_code_python,
  queue_dequeue_code_c,
  queue_dequeue_code_cpp,
  queue_dequeue_code_java,
  queue_dequeue_code_python,
  queue_front_code_c,
  queue_front_code_cpp,
  queue_front_code_java,
  queue_front_code_python
} from "../../codes/Queue_code";
import "./Queue.css";

function Queue() {
  const [chosenLanguage, setLanguage] = useState("c");
  const [chosenMode, setMode] = useState("c_cpp");
  const [chosenOperation, setOperation] = useState("enqueue");
  // let currQueue = [4, 5, 6, 7, 8, 9, 10, 69, 96, 101, 699];
 
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

  let output;
  const [enqueueVal, setEnqueueVal] = useState("");
  var [currQueue, setQueue] = useState([]);

  const handleOperation = (e) => {
    setOperation(e.target.value);
  };

  const handleEnqueueVal = (e) => {
    setEnqueueVal(e.target.value);
  }

  const handleEnqueue = () => {
    setQueue(currQueue => [enqueueVal, ...currQueue]);
    // setStack(currQueue => currQueue.unshift(pushVal));
    console.log(currQueue);
    setEnqueueVal("");
  };

  const handleDequeue = () => {
    let newQueue = [];
    for(var i=0; i<currQueue.length; i++){
      if(i != currQueue.length-1){
        newQueue.push(currQueue[i]);
      }
    }
    output = currQueue[currQueue.length - 1];
    setQueue(newQueue);
  }

  const handleFront = () => {
    output = currQueue[currQueue.length - 1];
  };

  // params
  let currParams;

  if (chosenOperation === "enqueue") {
    currParams = (
      <div class="input-label-group">
        <label for="push-value">Enter &nbsp; value &nbsp; :</label>
        <input className="field" onChange={handleEnqueueVal} value={enqueueVal} name="push-value" id="push-value" />
        <button onClick={handleEnqueue}>Enqueue</button>
      </div>
    );
  } else if (chosenOperation === "dequeue") {
    currParams = (
      <div class="input-label-group">
        <button onClick={handleDequeue}>Dequeue</button>
      </div>
    );
  } else if (chosenOperation === "front") {
    currParams = (
      <div class="input-label-group">
        <button onClick={handleFront}>Front</button>
      </div>
    );
  }

  let codeStatus;
  codeStatus = `queue_${chosenOperation}_code_${chosenLanguage}`;
  let currentCode;

  if (codeStatus === "queue_enqueue_code_c") {
    currentCode = queue_enqueue_code_c;
  } else if (codeStatus === "queue_enqueue_code_cpp") {
    currentCode = queue_enqueue_code_cpp;
  } else if (codeStatus === "queue_enqueue_code_java") {
    currentCode = queue_enqueue_code_java;
  } else if (codeStatus === "queue_enqueue_code_python") {
    currentCode = queue_enqueue_code_python;
  } else if (codeStatus === "queue_dequeue_code_c") {
    currentCode = queue_dequeue_code_c;
  } else if (codeStatus === "queue_dequeue_code_cpp") {
    currentCode = queue_dequeue_code_cpp;
  } else if (codeStatus === "queue_dequeue_code_java") {
    currentCode = queue_dequeue_code_java;
  } else if (codeStatus === "queue_dequeue_code_python") {
    currentCode = queue_dequeue_code_python;
  } else if (codeStatus === "queue_front_code_c") {
    currentCode = queue_front_code_c;
  } else if (codeStatus === "queue_front_code_cpp") {
    currentCode = queue_front_code_cpp;
  } else if (codeStatus === "queue_front_code_java") {
    currentCode = queue_front_code_java;
  } else if (codeStatus === "queue_front_code_python") {
    currentCode = queue_front_code_python;
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
              <option value="enqueue">Enqueqe</option>
              <option value="dequeue">Dequeue</option>
              <option value="front">Front</option>
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
              {/* <code class="language-javascript">{currentCode}</code> */}
            </pre>
          </div>
        </div>
        <div class="visualizer-section">
          <h2>Queue Visualizer</h2>
          <QueueVisualizer currQueue={currQueue} />
        </div>
      </div>
    </React.Fragment>
  );
}

export default Queue;
