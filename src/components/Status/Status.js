import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { BreachContainer } from "../BreachContainer/BreachContainer";
import Switch from "@mui/material/Switch";
import calendar from "../../../src/Images/calendar_today-24px (1).svg";

const options = ["Option 1", "Option 2"];
const label = { inputProps: { "aria-label": "Switch demo" } };

export const Status = () => {
  const [value, setValue] = React.useState(options[0]);
  const [inputValue, setInputValue] = React.useState("");

  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "#fafafa",
        paddingLeft: 80,
      }}
    >
      <div>
        <div
          style={{
            width: "90%",
            backgroundColor: "#fafafa",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginRight: "0",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <h2
              style={{
                color: "#706F6F",
                fontFamily: "sans-serif",
                marginRight: "20px",
              }}
            >
              Status Monitor
            </h2>
            <li style={{ display: "flex", listStyleType: "none" }}>
              <img
                src={calendar}
                style={{ width: "20px", height: "20px" }}
                alt=""
              />
              <time datetime="2017-02-14">22 Oct 2020</time>
            </li>
          </div>
          <Switch {...label} style={{ justifyContent: "flex-end" }} />
        </div>
        <p
          style={{
            color: "#A9ABAC",
            fontFamily: "sans-serif",
            fontSize: "15px",
          }}
        >
          Brief intro to the page functionality will be listed here.
        </p>
      </div>
      <div
        style={{
          width: "70%",
          display: "flex",
          justifyContent: "space-between",
          marginRight: "20px",
        }}
      >
        <br />
        <Autocomplete
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          inputValue={inputValue}
          onInputChange={(event, newInputValue) => {
            setInputValue(newInputValue);
          }}
          id="controllable-states-demo"
          options={options}
          sx={{ width: 250, height: 20, fontSize: 14, backgroundColor: "#fff" }}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Clients"
              style={{ backgroundColor: "#fff" }}
            />
          )}
        />
        <br />
        <Autocomplete
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          inputValue={inputValue}
          onInputChange={(event, newInputValue) => {
            setInputValue(newInputValue);
          }}
          id="controllable-states-demo"
          options={options}
          sx={{ width: 300 }}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Service"
              style={{ backgroundColor: "#fff" }}
            />
          )}
        />
        <br />
        <Autocomplete
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          inputValue={inputValue}
          onInputChange={(event, newInputValue) => {
            setInputValue(newInputValue);
          }}
          id="controllable-states-demo"
          options={options}
          sx={{ width: 300 }}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Task"
              style={{ backgroundColor: "#fff" }}
            />
          )}
        />
        <br />
        <Autocomplete
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          inputValue={inputValue}
          onInputChange={(event, newInputValue) => {
            setInputValue(newInputValue);
          }}
          id="controllable-states-demo"
          options={options}
          sx={{ width: 300 }}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Search"
              style={{ backgroundColor: "#fff" }}
            />
          )}
        />
      </div>
      <BreachContainer />
    </div>
  );
};
