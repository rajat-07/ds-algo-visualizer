import React, { useState } from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/theme-monokai";
import {
  c_boiler_plate,
  cpp_boiler_plate,
  java_boiler_plate,
  python_boiler_plate
} from "../../codes/Editor_boiler_plate";
import $ from "jquery";
import "./Dashboard.css";

function Dashboard() {
  const [currentLang, setLang] = useState("c");
  const [currentMode, setMode] = useState("c_cpp");
  const [currentBoilerPlate, setBoilerPlate] = useState("none");
  const [currC, setC] = useState(c_boiler_plate);
  const [currCpp, setCpp] = useState(cpp_boiler_plate);
  const [currJava, setJava] = useState(java_boiler_plate);
  const [currPython, setPython] = useState(python_boiler_plate);
  const [currCode, setCurrCode] = useState(currC);
  const apiUrl = "https://api.judge0.com";
  const [languageId, setLanguageId] = useState(50);
  const [stdIn, setStdIn] = useState("");
  const [stdOut, setStdOut] = useState("");

  const handleLang = e => {
    if (e.target.value === "c") {
      setMode("c_cpp");
      setCurrCode(currC);
      setLanguageId(50);
    } else if (e.target.value === "cpp") {
      setMode("c_cpp");
      setCurrCode(currCpp);
      setLanguageId(54);
    } else if (e.target.value === "java") {
      setMode("java");
      setCurrCode(currJava);
      setLanguageId(62);
    } else if (e.target.value === "python") {
      setMode("python");
      setCurrCode(currPython);
      setLanguageId(70);
    }
    setLang(e.target.value);
  };

  const handleEditorChange = e => {
    if (currentLang === "c") {
      setC(e);
    } else if (currentLang === "cpp") {
      setCpp(e);
    } else if (currentLang === "java") {
      setJava(e);
    } else if (currentLang === "python") {
      setPython(e);
    }
    setCurrCode(e);
  };

  const handleBoilerPlate = e => {
    setBoilerPlate(e.target.value);
  };

  const encode = (str) => {
    return btoa(unescape(encodeURIComponent(str || "")));
  }

  const handleStdIn = (e) => {
    setStdIn(e.target.value);
  }

  const handleStdOut = (e) => {
    setStdOut(e.target.value);
  }

  const setValueOfStdOut = (token) => {
    $.ajax({
      url:
        apiUrl +
        `/submissions/${token}?base64_encoded=false&fields=message,stdout,stderr,status,language_id`,
      type: "GET",
      async: true,
      contentType: "application/json",
      success: function(data) {
        setStdOut(data.stdout);
      }
    });
  }

  const runCode = () => {
    var data = {
      source_code: encode(currCode),
      language_id: languageId,
      stdin: encode(stdIn)
    };
  
    $.ajax({
      url: apiUrl + `/submissions?base64_encoded=true&wait=false`,
      type: "POST",
      async: true,
      contentType: "application/json",
      data: JSON.stringify(data),
      success: function(data) {
        setTimeout(() => {
          setValueOfStdOut(data.token);
        }, 5000);
        console.log(`Your submission token is: ${data.token}`);
      }
      // error: handleRunError
    });
  }

  return (
    <React.Fragment>
      <h2>Dashboard</h2>
      <div className="editor-params">
        <select id="lang-dropdown" value={currentLang} onChange={handleLang}>
          <option value="c">C</option>
          <option value="cpp">C++</option>
          <option value="java">Java</option>
          <option value="python">Python</option>
        </select>
        <select
          id="boiler-plate-dropdown"
          value={currentBoilerPlate}
          onChange={handleBoilerPlate}
        >
          <option value="none">None</option>
          <option value="linked-list">Linked List</option>
          <option value="graph">Graph</option>
          <option value="tree">Tree</option>
        </select>
        <button id="compile" onClick={runCode} class="btn-sky" type="submit">
          Compile
        </button>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-12 col-sm-12 codeSide">
            <div class="row">
              <div class="col-md-12 col-sm-12">
                <div class="compile-code">
                  <pre name="code" id="editor">
                    <div className="code-editor-wrapper">
                      <AceEditor
                        className="main-code-editor"
                        placeholder="Placeholder Text"
                        mode={currentMode}
                        theme="monokai"
                        name="blah2"
                        // onLoad={this.onLoad}
                        onChange={handleEditorChange}
                        fontSize={14}
                        showPrintMargin={true}
                        showGutter={true}
                        highlightActiveLine={false}
                        value={currCode}
                      />
                    </div>
                    <div className="std-in-out">
                      <div className="std-in">
                        <p>STD IN</p>
                        <textarea onChange={handleStdIn} value={stdIn} spellcheck="false" id="std_input"></textarea>
                      </div>
                      <div className="std-out">
                        <p>STD OUT</p>
                        <textarea onChange={handleStdOut} value={stdOut} spellcheck="false" id="std_output"></textarea>
                      </div>
                    </div>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Dashboard;
