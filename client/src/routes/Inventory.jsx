import React from "react";
import AddInventory from "../component/AddInventory";
import ShowInv from "../component/ShowInv";
import Navbar from "../component/Navbar";

const Inventory = () => {
  return (
    <div className="aboutus">
      <Navbar />
      Inventory
      <AddInventory />
      <ShowInv />
    </div>
  );
};

export default Inventory;
