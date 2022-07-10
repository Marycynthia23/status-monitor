import * as React from "react";
import { LongContainer } from "../../customAssets/LongContainer/LongContainer/LongContainer";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
// import ListItem from "@mui/material/ListItem";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import nb from "../../../src/Images/Ellipse 152.png";
import bd from "../../../src/Images/Ellipse 155.png";
import notb from "../../../src/Images/Group 1377.png";
import brd from "../../../src/Images/Group 1378.png";
import notbrd from "../../../src/Images/Ellipse 156.png";
import breched from "../../../src/Images/Ellipse 157.png";

export const BreachContainer = () => {
  const [left, setLeft] = React.useState([0]);
  const [right, setRight] = React.useState([1]);

  const handleAllRight = () => {
    setRight(right.concat(left));
    setLeft([]);
  };

  const handleAllLeft = () => {
    setLeft(left.concat(right));
    setRight([]);
  };

  const customList = (items) => (
    <Paper>
      <List dense component="div" role="list">
        {items.map((value) => {
          return <LongContainer key={value} />;
        })}
      </List>
    </Paper>
  );

  return (
    <div>
      <div
        style={{
          width: "90%",
          display: "flex",
          alignItems: "center",
          backgroundColor: "#fff",
          padding: "20px",
          marginTop: "30px",
        }}
      >
        <li
          style={{ display: "flex", alignItems: "center", marginRight: "20px" }}
        >
          <img src={nb} style={{ width: "20px", height: "20px" }} alt="" />
          <p
            style={{
              color: "#706F6F",
              fontFamily: "sans-serif",
              fontSize: "15px",
            }}
          >
            Not Breached
          </p>
        </li>
        <li
          style={{ display: "flex", alignItems: "center", marginRight: "20px" }}
        >
          <img src={bd} style={{ width: "20px", height: "20px" }} alt="" />
          <p
            style={{
              color: "#706F6F",
              fontFamily: "sans-serif",
              fontSize: "15px",
            }}
          >
            Breached
          </p>
        </li>
        <li
          style={{ display: "flex", alignItems: "center", marginRight: "20px" }}
        >
          <img src={notb} style={{ width: "20px", height: "20px" }} alt="" />
          <p
            style={{
              color: "#706F6F",
              fontFamily: "sans-serif",
              fontSize: "15px",
            }}
          >
            Not Breached
          </p>
        </li>
        <li
          style={{ display: "flex", alignItems: "center", marginRight: "20px" }}
        >
          <img src={brd} style={{ width: "20px", height: "20px" }} alt="" />
          <p
            style={{
              color: "#706F6F",
              fontFamily: "sans-serif",
              fontSize: "15px",
            }}
          >
            {" "}
            Breached
          </p>
        </li>
        <li
          style={{ display: "flex", alignItems: "center", marginRight: "20px" }}
        >
          <img src={notbrd} style={{ width: "20px", height: "20px" }} alt="" />
          <p
            style={{
              color: "#706F6F",
              fontFamily: "sans-serif",
              fontSize: "15px",
            }}
          >
            Not Breached
          </p>
        </li>
        <li
          style={{ display: "flex", alignItems: "center", marginRight: "20px" }}
        >
          <img src={breched} style={{ width: "20px", height: "20px" }} alt="" />
          <p
            style={{
              color: "#706F6F",
              fontFamily: "sans-serif",
              fontSize: "15px",
            }}
          >
            {" "}
            Breached
          </p>
        </li>
      </div>
      <div style={{ display: "flex", marginRight: "20px" }}>
        <div
          style={{
            width: "50%",
            display: "flex",
            flexDirection: "row",
            marginRight: "20px",
            backgroundColor: "pink",
            padding: "10px",
            overflow: "auto",
          }}
        >
          <Grid item>{customList(left)}</Grid>
          <Button
            sx={{ my: 0.5 }}
            variant="outlined"
            size="small"
            onClick={handleAllRight}
            disabled={left.length === 0}
            aria-label="move all right"
          >
            ≫
          </Button>
        </div>
        <div style={{ marginRight: "20px" }}>
          <Grid item>{customList(right)}</Grid>
          <Button
            sx={{ my: 0.5 }}
            variant="outlined"
            size="small"
            onClick={handleAllLeft}
            disabled={right.length === 0}
            aria-label="move all left"
          >
            ≪
          </Button>
        </div>
      </div>
    </div>
  );
};
