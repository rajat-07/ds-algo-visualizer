import React, { useState, useEffect } from "react";
import Tree from "react-d3-tree";
import "./RedBlackTreeVisualizer.css";

const containerStyles = {
  width: "100%",
  height: "100vh",
};

const nullNode = "NIL";

const redColor = {
  shapeProps: {
    shape: "circle",
    r: 11,
    fill: "red",
    stroke: "white",
  },
};

const blackColor = {
  shapeProps: {
    shape: "circle",
    r: 11,
    fill: "black",
    stroke: "white",
  },
};

const yellowColor = {
  shapeProps: {
    shape: "circle",
    r: 11,
    fill: "yellow",
    stroke: "green",
  },
};

function RedBlackTreeVisualizer() {
  let treeContainer;

  // input
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");

  const handleInput1 = (e) => {
    setInput1(e.target.value);
  };

  const handleInput2 = (e) => {
    setInput2(e.target.value);
  };

  // tree props
  const [translate, setTranslate] = useState();
  const [myTreeData, setTreeData] = useState([
    { name: nullNode, nodeSvgShape: blackColor },
  ]);
  const [forceMount, setForceMount] = useState(true);
  const [searchPath, setSearchPath] = useState("");

  const insertNode = () => {
    if (input1 != "") {
      let value = input1;
      console.log("Value entered = " + value);
      let tree = myTreeData;
      // Root is null then node will be added to the tree and made root
      if (tree[0].name == nullNode) {
        tree = [
          {
            name: value,
            nodeSvgShape: blackColor,
            children: [
              { name: nullNode, nodeSvgShape: blackColor },
              { name: nullNode, nodeSvgShape: blackColor },
            ],
          },
        ];
      }
      // else find the correct position in the tree and add the node
      else {
        // TREE-INSERT procedure
        var rightDirection = true;
        var leftDirection = false;
        var previousNode = null;
        var previousDirection = leftDirection;
        var currentNode = tree[0];
        var prePreviousNode = null;
        var prevPrePreviousNode = null;
        var isValueFound = false;
        while (currentNode.name != nullNode) {
          prevPrePreviousNode = prePreviousNode;
          prePreviousNode = previousNode;
          previousNode = currentNode;
          if (parseInt(value) > parseInt(currentNode.name)) {
            currentNode = currentNode.children[1];
            previousDirection = rightDirection;
          } else if (parseInt(value) < parseInt(currentNode.name)) {
            currentNode = currentNode.children[0];
            previousDirection = leftDirection;
          } else {
            isValueFound = true;
            break;
          }
        }
        if (isValueFound == false) {
          if (previousDirection == leftDirection) {
            previousNode.children[0] = {
              name: value,
              nodeSvgShape: redColor,
              children: [
                { name: nullNode, nodeSvgShape: blackColor },
                { name: nullNode, nodeSvgShape: blackColor },
              ],
            };
            currentNode = previousNode.children[0];
          } else {
            previousNode.children[1] = {
              name: value,
              nodeSvgShape: redColor,
              children: [
                { name: nullNode, nodeSvgShape: blackColor },
                { name: nullNode, nodeSvgShape: blackColor },
              ],
            };
            currentNode = previousNode.children[1];
          }
          // RB-INSERT-FIXUP procedure
          console.log("Grandparent node = " + prePreviousNode);
          console.log("Parent node = " + previousNode);
          console.log("Node = " + currentNode.name);
          // debugger;
          while (previousNode.nodeSvgShape == redColor) {
            if (previousNode.name == prePreviousNode.children[0].name) {
              var y = prePreviousNode.children[1];
              if (y.nodeSvgShape == redColor) {
                previousNode.nodeSvgShape = blackColor;
                y.nodeSvgShape = blackColor;
                prePreviousNode.nodeSvgShape = redColor;
                currentNode = prePreviousNode;
              } else {
                if (currentNode.name == previousNode.children[1].name) {
                  currentNode = previousNode;
                  // debugger;
                  // LEFT-Rotate(T,currentNode)
                  var temp = currentNode.children[1];
                  currentNode.children[1] = temp.children[0];
                  if (temp.children[0].name != nullNode) {
                    temp = currentNode;
                  }
                  currentNode = previousNode;
                  if (previousNode.name == nullNode) {
                    tree[0] = temp;
                  } else if (
                    currentNode.name == previousNode.children[0].name
                  ) {
                    previousNode.children[0] = temp;
                  } else {
                    previousNode.children[1] = temp;
                  }
                  temp.children[0] = currentNode;
                  previousNode = temp;
                  // end of LEFT-Rotate(T,currentNode)
                }
                previousNode.nodeSvgShape = blackColor;
                prePreviousNode.nodeSvgShape = redColor;
                // debugger;
                // RIGHT-Rotate(T,prePreviousNode)

                // end of RIGHT-Rotate(T,prePreviousNode)
              }
            } else {
              var y = prePreviousNode.children[0];
              if (y.nodeSvgShape == redColor) {
                // debugger;
                previousNode.nodeSvgShape = blackColor;
                y.nodeSvgShape = blackColor;
                prePreviousNode.nodeSvgShape = redColor;
                currentNode = prePreviousNode;
              } else {
                if (currentNode.name == previousNode.children[0].name) {
                  currentNode = previousNode;
                  // debugger;
                  // RIGHT-Rotate(T,currentNode)
                  var temp = currentNode.children[0];
                  currentNode.children[0] = temp.children[1];
                  if (temp.children[1].name != nullNode) {
                    temp = currentNode;
                  }
                  currentNode = previousNode;
                  if (previousNode.name == nullNode) {
                    tree[0] = temp;
                  } else if (
                    currentNode.name == previousNode.children[1].name
                  ) {
                    previousNode.children[1] = temp;
                  } else {
                    previousNode.children[0] = temp;
                  }
                  temp.children[1] = currentNode;
                  previousNode = temp;
                  // end of RIGHT-Rotate(T,currentNode)
                }
                previousNode.nodeSvgShape = blackColor;
                prePreviousNode.nodeSvgShape = redColor;
                // debugger;
                // LEFT-Rotate(T,prePreviousNode)

                // end of LEFT-Rotate(T,prePreviousNode)
              } // end else
            } // end else
          } // end while
          tree[0].nodeSvgShape = blackColor;
        }
      }
      setInput1("");
      setTreeData(tree);
      setForceMount(!forceMount);
    }
  };

  const searchNode = () => {
    // debugger;
    if (input2 != "") {
      var value = parseInt(input2, 10);
      var tmp = myTreeData;
      var currentNode = tmp[0];
      var route = "";
      var isFound = false;
      while (currentNode.name != nullNode) {
        route += currentNode.name + ", ";
        console.log(currentNode.name);
        currentNode.nodeSvgShape = yellowColor;
        setTreeData(tmp);
        setForceMount(!forceMount);
        if (parseInt(currentNode.name) == value) {
          isFound = true;
          // alert('Value Found!');
        } else if (parseInt(currentNode.name) > value) {
          currentNode = currentNode.children[0];
        } else {
          currentNode = currentNode.children[1];
        }
        if (isFound == true) break;
      }
      if (isFound == false) {
        alert("Value not found!");
      }
      if (route[route.length - 2] == ",") {
        route = route.substring(0, route.length - 2);
      }
      setInput2("");
      setSearchPath(route);
    }
  };

  // useEffect
  useEffect(() => {
    const dimensions = treeContainer.getBoundingClientRect();
    const Ttranslate = {
      x: dimensions.width / 2,
      y: dimensions.height / 7,
    };
    setTranslate(Ttranslate);
  }, []);

  return (
    <div style={containerStyles} ref={(tc) => (treeContainer = tc)}>
      <div style={{ marginTop: -15, height: 61, backgroundColor: "#006633" }}>
        <h1
          style={{
            paddingLeft: 10,
            paddingTop: 10,
            marginTop: 15,
            color: "#ffCC33",
          }}
        >
          {" "}
          Red-Black Tree Visualization{" "}
        </h1>
      </div>
      <br />
      <input
        style={{ marginLeft: 100 }}
        type="text"
        placeholder="Enter a value to be added"
        value={input1}
        onChange={handleInput1}
      />
      <button
        onClick={() => {
          insertNode();
        }}
      >
        {" "}
        Insert{" "}
      </button>

      <input
        style={{ marginLeft: 200 }}
        type="text"
        placeholder="Enter a value to search for"
        value={input2}
        onChange={handleInput2}
      />
      <button onClick={() => { searchNode(); }}> Search </button>
      <br />
      {searchPath != "" && (
        <div>
          <br />
          <label style={{ marginLeft: 20 }}>
            {" "}
            Search path is: {searchPath}
          </label>
        </div>
      )}
      <Tree
        data={myTreeData}
        orientation={"vertical"}
        translate={translate}
        collapsible={false}
        depthFactor={60}
        key={forceMount}
      />
    </div>
  );
}

export default RedBlackTreeVisualizer;
