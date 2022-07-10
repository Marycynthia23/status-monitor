import React from "react";

export const ProgressDisplay = () => {
  return (
    <div>
      <div>
        {" "}
        <br />
        <div style={{ display: "flex" }}>
          <div
            style={{ backgroundColor: "red", width: "20px", height: "20px" }}
          >
            2
          </div>
          <div
            style={{ backgroundColor: "grey", width: "20px", height: "20px" }}
          >
            5{" "}
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <div
            style={{ backgroundColor: "red", width: "20px", height: "20px" }}
          >
            2
          </div>
          <div
            style={{ backgroundColor: "grey", width: "20px", height: "20px" }}
          >
            5{" "}
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <div
            style={{ backgroundColor: "red", width: "20px", height: "20px" }}
          >
            2
          </div>
          <div
            style={{ backgroundColor: "green", width: "20px", height: "20px" }}
          >
            5{" "}
          </div>
        </div>
      </div>
    </div>
  );
};
