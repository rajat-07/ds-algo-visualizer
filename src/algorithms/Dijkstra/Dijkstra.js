import React from "react";
import PathfindingVisualizer from "../../visualizer/PathfindingVisualizer/PathfindingVisualizer"
// import PathfindingVisualizer from "../../visualizer/PathfindingVisualizer/PathfindingVisualizer";
import "./Dijkstra.css";

function Dijkstra() {
  return (
    <React.Fragment>
      <h2>Dijkstra</h2>
      <PathfindingVisualizer />
    </React.Fragment>
  );
}

export default Dijkstra;
