import React, { useState } from "react";
import pointerLogo from "../../images/pointer.png";
import "./LinkedListVisualizer.css";

function LinkedListVisualizer() {
  const [addIndex, setAddIndex] = useState(0);
  const [addData, setAddData] = useState(1);

  const handleAddData = (e) => {
    setAddData(e.target.value);
  };

  const handleAddIndex = (e) => {
    setAddIndex(e.target.value);
  };

  let list = document.getElementById("list");
  let nodes = document.getElementsByClassName("ll-node");
  let pointers = document.getElementsByClassName("pointer");

  let nodeAnimationTimeout = 1000;
  let pointerAnimationTimeout = 800;

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
    img.src = `${pointerLogo}`
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

  return (
    <React.Fragment>
      {/* <div>
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
      </div> */}
      <section class="list" id="list"></section>
    </React.Fragment>
  );
}

export default LinkedListVisualizer;
