import React from "react";

const nav_bar_style = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "10px",
  backgroundColor: "#f0f0f0",
};
const list_style = { listStyle: "none", margin: "0 10px" };
const ul_style = { display: "flex", padding: "0", margin: "0" }; // Add flex display to ul

function Navbar() {
  return (
    <nav className="nav_bar" style={nav_bar_style}>
      <ul style={ul_style}>
        {" "}
        <li style={list_style}>
          <img
            src="logo.png"
            alt="icon"
            style={{ width: "25px", height: "25px", marginRight: "5px" }}
          />
        </li>
        <li style={list_style}>
          <a href="/">Home Page</a>
        </li>
        <li style={list_style}>
          <a href="/about">About Me</a>
        </li>
        <li style={list_style}>
          <a href="/projects">Projects</a>
        </li>
        <li style={list_style}>
          <a href="/services">Services</a>
        </li>
        <li style={list_style}>
          <a href="/contact">Contact Me</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
