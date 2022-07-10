import React from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Button from "@mui/material/Button";

export const innerDisplay = () => {
  return (
    <div>
      <ul>
        <li>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <p>Nneoma Onuoha</p>
            <MoreVertIcon />
          </div>
          <div>
            <Button variant="contained">Contained</Button>
            <p>Nneoma is coding</p>
          </div>
        </li>
      </ul>
    </div>
  );
};
