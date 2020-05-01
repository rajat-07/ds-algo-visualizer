import React, { useState, useEffect } from "react";
import Tree from "react-d3-tree";

const containerStyles = {
  width: "100%",
  height: "100vh",
};

function BSTVisualizer({ data}) {

  let [translate, setTranslate] = useState();
  let treeContainer;

  useEffect(() => {
    const dimensions = treeContainer.getBoundingClientRect();
    setTranslate({
      x: dimensions.width / 2,
      y: dimensions.height / 7,
    });
  }, []);

  return (
    <div style={containerStyles} ref={(tc) => (treeContainer = tc)}>
      <Tree
        data={data}
        translate={translate}
        orientation={"vertical"}
        transitionDuration={0}
        collapsible={false}
        depthFactor={60}
      />
    </div>
  );
}

export default BSTVisualizer;
