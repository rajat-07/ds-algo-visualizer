/*
import React, { useState, useEffect } from "react";
import "react-dropdown/style.css";
import StackVisualizer from "../../visualizer/StackVisualizer/StackVisualizer";
import Prism from "prismjs";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/theme-monokai";
import $ from "jquery";
import {
  stack_push_code_c,
  stack_push_code_cpp,
  stack_push_code_java,
  stack_push_code_python,
  stack_pop_code_c,
  stack_pop_code_cpp,
  stack_pop_code_java,
  stack_pop_code_python,
  stack_peek_code_c,
  stack_peek_code_cpp,
  stack_peek_code_java,
  stack_peek_code_python,
} from "../../codes/Stack_code";
import "./Stack.css";

function Stack() {
  const [chosenLanguage, setLanguage] = useState("c");
  const [chosenMode, setMode] = useState("c_cpp");
  const [chosenOperation, setOperation] = useState("push");
 
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
  const [pushVal, setPushVal] = useState("");
  var [currStack, setStack] = useState([]);

  const handleOperation = (e) => {
    setOperation(e.target.value);
  };

  const handlePushVal = (e) => {
    setPushVal(e.target.value);
  }

  const handlePush = () => {
    setPushVal("");
    setStack(currStack => [...currStack, pushVal]);
    // setStack(currStack => currStack.unshift(pushVal));
    console.log(currStack);
    // setPushVal("");
  };

  const handlePop = () => {
    let newStack = [];
    for(var i=0; i<currStack.length; i++){
      if(i != currStack.length-1){
        newStack.push(currStack[i]);
      }
    }
    output = currStack[currStack.length - 1];
    setStack(newStack);
  }

  const handlePeek = () => {
    output = currStack[currStack.length - 1];
  };

  // params
  let currParams;

  if (chosenOperation === "push") {
    currParams = (
      <div class="input-label-group">
        <label for="push-value">Enter &nbsp; value &nbsp; :</label>
        <input className="field" onChange={handlePushVal} value={pushVal} name="push-value" id="push-value" />
        <button onClick={handlePush}>Push</button>
      </div>
    );
  } else if (chosenOperation === "pop") {
    currParams = (
      <div class="input-label-group">
        <button onClick={handlePop}>Pop</button>
      </div>
    );
  } else if (chosenOperation === "peek") {
    currParams = (
      <div class="input-label-group">
        <button onClick={handlePeek}>Peek</button>
      </div>
    );
  }

  let codeStatus;
  codeStatus = `stack_${chosenOperation}_code_${chosenLanguage}`;
  let currentCode;

  if (codeStatus === "stack_push_code_c") {
    currentCode = stack_push_code_c;
  } else if (codeStatus === "stack_push_code_cpp") {
    currentCode = stack_push_code_cpp;
  } else if (codeStatus === "stack_push_code_java") {
    currentCode = stack_push_code_java;
  } else if (codeStatus === "stack_push_code_python") {
    currentCode = stack_push_code_python;
  } else if (codeStatus === "stack_pop_code_c") {
    currentCode = stack_pop_code_c;
  } else if (codeStatus === "stack_pop_code_cpp") {
    currentCode = stack_pop_code_cpp;
  } else if (codeStatus === "stack_pop_code_java") {
    currentCode = stack_pop_code_java;
  } else if (codeStatus === "stack_pop_code_python") {
    currentCode = stack_pop_code_python;
  } else if (codeStatus === "stack_peek_code_c") {
    currentCode = stack_peek_code_c;
  } else if (codeStatus === "stack_peek_code_cpp") {
    currentCode = stack_peek_code_cpp;
  } else if (codeStatus === "stack_peek_code_java") {
    currentCode = stack_peek_code_java;
  } else if (codeStatus === "stack_peek_code_python") {
    currentCode = stack_peek_code_python;
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
              <option value="push">Push</option>
              <option value="pop">Pop</option>
              <option value="peek">Peek</option>
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
            <code class="language-javascript">{currentCode}</code> 
            </pre>
          </div>
        </div>
        <div class="visualizer-section">
          <h2>Stack Visualizer</h2>
          <StackVisualizer currStack={currStack} />
        </div>
      </div>
    </React.Fragment>
  );
}

export default Stack;

*/