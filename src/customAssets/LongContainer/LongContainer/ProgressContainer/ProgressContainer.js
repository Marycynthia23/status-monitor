import * as React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { ProgressDisplay } from "../../../ProgressDisplay/ProgressDisplay";
import { innerDisplay } from "../../../innerDisplay/innerDisplay";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Button from "@mui/material/Button";

// const headings = [
//   { id: 1, title: "Accounting" },
//   { id: 2, title: "Reconciliation" },
//   { id: 3, title: "Financial Reporting" },
//   { id: 4, title: "Middle Office" },
// ];

export const ProgressContainer = () => {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div>
      <List
        sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        component="nav"
      >
        <ListItemButton onClick={handleClick}>
          <ListItemText primary="Accounting" />
          {open ? <ExpandLess /> : <ExpandMore />}
          <br />
          <ProgressDisplay />
        </ListItemButton>
        <ListItemButton onClick={handleClick}>
          <ListItemText primary="Reconciliation" />
          {open ? <ExpandLess /> : <ExpandMore />}
          <br />
          <ProgressDisplay />
        </ListItemButton>
        <ListItemButton onClick={handleClick}>
          <ListItemText primary="Financial Reporting" />
          {open ? <ExpandLess /> : <ExpandMore />}
          <br />
          <ProgressDisplay />
        </ListItemButton>
        <ListItemButton onClick={handleClick}>
          <ListItemText primary="Middle Office" />
          {open ? <ExpandLess /> : <ExpandMore />}
          <br />
          <ProgressDisplay />
        </ListItemButton>

        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div">
            <ListItemButton sx={{ marginLeft: "0px" }}>
              <ul>
                <li
                  style={{
                    // display: "column",
                    listStyleType: "none",
                    border: "1px solid green",
                    width: "100%",
                    margin: "auto",
                  }}
                >
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <p style={{ fontSize: "12px", width: "100%" }}>
                      CASH RECON WITH CP - CASH
                    </p>
                    <MoreVertIcon />
                  </div>
                  <div
                    style={{ display: "flex", justifyContent: "space-evenly" }}
                  >
                    <Button variant="contained" style={{ fontSize: "9px" }}>
                      Breached/failed
                    </Button>
                    <p style={{ fontSize: "12px" }}>
                      SLA: 20 Jul 2020, 9:10 AM
                    </p>
                  </div>
                </li>
              </ul>
            </ListItemButton>
          </List>
        </Collapse>
      </List>
    </div>
  );
};
