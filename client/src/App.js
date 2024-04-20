// App.js
import React, { Fragment, useState } from "react";
import "./App.css";
import { Navigate, useNavigate } from "react-router-dom";
import Navbar from "./component/Navbar";

function App() {
  return (
    <Fragment>
      <Navbar />
    </Fragment>
  );
}

export default App;
