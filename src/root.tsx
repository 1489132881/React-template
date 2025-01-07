import React from "react";
import logo from "./assets/logo.svg";
import "./App.css";

export default function Root() {
  return (
    <h1>
      Hello World <img src={logo} alt="" />
    </h1>
  );
}
