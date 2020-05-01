import React, { useEffect } from "react";
import "./StackVisualizer.css";
import $ from "jquery";

function StackVisualizer({ currStack }) {
  useEffect(() => {
    initStack();
  }, []);

  const initStack = () => {
    let stacklen = currStack.length;
    for (var i = 0; i < stacklen; i++) {
      let marginI = 300 - 50 * i;

      // $(`#item-${i}`).css({
      //   // "bottom": `${marginI}`,
      //   "margin-top": `2px`,
      //   "font-size": "200%",
      //   "color": "black",
      // });
    }
    // $(`#item-0`).css({
    //   // "bottom": `${marginI}`,
    //   "margin-top": `250px`,
    //   "font-size": "200%",
    //   "color": "black",
    // });
  };

  return (
    <div class="grid">
      <div class="grid-col stack-container">
        <div className="stack-holder">
          <div className="stack-items">
            {currStack.slice(0).reverse().map((item, itemIdx) => {
              return (
                <div
                  className="stack-item"
                  id={`item-${itemIdx}`}
                  key={itemIdx}
                >
                  {item}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default StackVisualizer;
