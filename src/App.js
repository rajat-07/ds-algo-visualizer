import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import DataStructure from "./components/DataStructure/DataStructure";
import Algorithm from "./components/Algorithm/Algorithm";
import Info from "./components/Info/Info";
import Prism from "prismjs";
import $ from "jquery";
import "./App.css";

function App() {
  let history = useHistory();

  const [display, setDisplay] = useState("dashboard");
  let currPage;

  useEffect(() => {
    history.push(`/`);
    Prism.highlightAll();
  }, []);

  const handleDashboard = () => {
    history.push(`/`);
  };

  const handleInfo = () => {
    history.push(`/info`);
  };

  if (display === "dataStructures") {
    currPage = <DataStructure />;
    $("*").removeClass("active");
    $("#ds").addClass("active");
  } else if (display === "algorithms") {
    currPage = <Algorithm />;
    $("*").removeClass("active");
    $("#algo").addClass("active");
  } else if (display === "info") {
    currPage = <Info />;
    $("*").removeClass("active");
    $("#info").addClass("active");
  } else {
    currPage = <Dashboard />;
    $("*").removeClass("active");
    $("#home").addClass("active");
  }

  return (
    <div className="App">
      <section class="nav">
        <div class="vertical-menu">
          <div class="menu-container">
            <button
              onClick={() => {
                handleDashboard();
                setDisplay("dashboard");
              }}
            >
              <i id="home" class="fas fa-home"></i>
            </button>
            <button
              onClick={() => {
                setDisplay("dataStructures");
              }}
            >
              <i id="ds" class="fa fa-project-diagram"></i>
            </button>
            <button
              onClick={() => {
                setDisplay("algorithms");
              }}
            >
              <i id="algo" class="fa fa-code"></i>
            </button>
            <button
              onClick={() => {
                handleInfo();
                setDisplay("info");
              }}
            >
              <i id="info" class="fas fa-info-circle"></i>
            </button>
          </div>
        </div>
      </section>
      {currPage}
    </div>
  );
}

export default App;
