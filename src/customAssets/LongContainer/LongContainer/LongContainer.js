import * as React from "react";
import { ProgressContainer } from "./ProgressContainer/ProgressContainer";
import pin from "../../../Images/push_pin-24px (1).png";

export const LongContainer = (props) => {
  return (
    <div
      style={{
        width: "250px",
        height: "500px",
        backgroundColor: "green",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h4>Indigo</h4>
        <img src={pin} style={{ width: "40px", height: "40px" }} alt="" />
      </div>
      <ProgressContainer />
    </div>
  );
};
