import React, { useState } from "react";
import "./QueueVisualizer.css";

function QueueVisualizer({ currQueue }) {
  return (
    <div class="queue-grid">
      <div class="queue-grid-col queue-container rotated">
        <div className="queue-holder">
          <div className="queue-items">
            {currQueue
              .slice(0)
              .reverse()
              .map((item, itemIdx) => {
                return (
                  <div
                    className="queue-item"
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

export default QueueVisualizer;
