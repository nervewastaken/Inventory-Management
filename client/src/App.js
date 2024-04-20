// App.js
import React, { Fragment, useState } from "react";
import "./App.css";
import InputProd from "./component/inputprod";
import Charts from "./component/charts";
import AddInventory from "./component/AddInventory"; // Import AddInventory component
import ShowProd from "./component/ShowProd";
import ShowInv from "./component/ShowInv";

function App() {
  const [showContent, setShowContent] = useState(false);

  // Function to handle form submission from AddInventory component
  // Function to toggle about us section
  const toggleContent = () => {
    setShowContent(!showContent);
  };

  return (
    <Fragment>
      {/* input for products  */}

      <InputProd />

      <div className="main">
        {/* Product List */}
        <ShowProd />

        <div className="line"></div>

        {/* Add Inventory Form */}
        <AddInventory />

        {/* Inventory Table */}
        <div className="inventory">
          <ShowInv />
        </div>
      </div>

      {/* Analytics section  */}
      <Charts />

      {/* ABOUT US SECTION */}
      <button className="toggle-button" onClick={toggleContent}>
        About Us
      </button>
      <div
        className="container"
        style={{ display: showContent ? "block" : "none" }}
      >
        <div className="content">
          <div className="susdiv">
            <h2>About Us</h2>
            <h3>Project for Web Programming</h3>
            <p>Made by</p>
            Krish Verma - 22BCE2382
            <br></br>V Hemal Sri - 22BDS0432
            <br></br>
            Muhammed Sirfan -22BKT0147
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
