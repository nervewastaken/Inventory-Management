// App.js
import React, { Fragment, useState } from "react";
import "./App.css";
import { Navigate, useNavigate } from "react-router-dom";
import Navbar from "./component/Navbar";
import Loginpage from "./component/loginpage";
import Hero from "./component/Hero";

function App() {
  return (
    <Fragment>
      <Hero />
    </Fragment>
  );
}

export default App;
