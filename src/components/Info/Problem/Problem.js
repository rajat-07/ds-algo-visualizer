import React, { useState, useEffect } from "react";
import { Collapse } from "reactstrap";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/theme-monokai";
import $ from "jquery";
import "./Problem.css";

function Problem(props) {
  const prob = props.prob;
  const probIdx = props.probIdx;

  const [collapse, setCollapse] = useState(false);
  const [currentExplanation, setExplanation] = useState(0);
  const explen = prob.explanation.length;
  const [markers, setMarkers] = useState([]);

  const handleToggle = () => {
    setCollapse(!collapse);
  };

  const handleMarker = () => {
    let currFrom = prob.explanation[currentExplanation].from;
    let currTo = prob.explanation[currentExplanation].to;
    $(`.exp-${probIdx}`).removeClass("exp-active");
    $(`#exp-${probIdx}-${currFrom}-${currTo}`).addClass("exp-active");
    let newMarker = {
      startRow: currFrom,
      endRow: currTo,
      className: "replacement_marker",
      type: "text",
    };
    setMarkers([newMarker]);
    console.log(currentExplanation);
  };

  const handleNextExp = () => {
    if (currentExplanation === explen - 1) {
      setExplanation(0);
      handleMarker();
      return;
    }
    setExplanation(currentExplanation + 1);
    handleMarker();
  };

  let currIcon;

  if(collapse){
      currIcon = <i class="fa fa-angle-up"></i>;
  } else{
    currIcon = <i class="fa fa-angle-down"></i>;
  }

  useEffect(() => {
    
  }, [currentExplanation]);

  return (
      <div className="problem">
        <p onClick={handleToggle}>
          <strong>{prob.title}</strong>
          <a className="prob-link" href={prob.link} target="_blank">Try Out</a>
          <div>
            { currIcon }
          </div>
        </p>
        <Collapse isOpen={collapse}>
          <div className="prob-soln">
            <div class="container">
              <div class="row">
                <div class="col-md-12 col-sm-12 codeSide">
                  <div class="row">
                    <div class="prob-exp-body col-md-12 col-sm-12">
                      <div className="code-editor-wrapper">
                        <AceEditor
                          className="prob-editor"
                          placeholder="Placeholder Text"
                          mode="c_cpp"
                          theme="monokai"
                          name="blah2"
                          fontSize={14}
                          showPrintMargin={true}
                          readOnly={true}
                          showGutter={true}
                          highlightActiveLine={false}
                          value={prob.solution}
                          tabSize={2}
                          markers={markers}
                        />
                      </div>
                      <div className="prob-explanation">
                        <div className="explanation-header">
                          <p>Explanation</p>
                          <button
                            value={prob.explanation.length}
                            onClick={handleNextExp}
                          >
                            Next
                          </button>
                        </div>
                        <div className="explanation-body">
                          {prob.explanation.map((exp, expIdx) => {
                            return (
                              <div
                                id={`exp-${probIdx}-${exp.from}-${exp.to}`}
                                className={`exp-${probIdx}`}
                                key={expIdx}
                              >
                                {exp.content}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Collapse>
      </div>
  );
}

export default Problem;
