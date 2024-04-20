// Products.jsx
import React, { useState } from "react";
import Navbar from "../component/Navbar";
import InputProd from "../component/inputprod";
import ShowProd from "../component/ShowProd";

const Products = () => {
  const [prod, setProd] = useState([]);
  const fetchProducts = async () => {
    try {
      const response = await fetch("http://localhost:4000/addprod");
      const jsonData = await response.json();
      setProd(jsonData);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Navbar />
      <InputProd fetchProducts={fetchProducts} />
      <ShowProd />
    </div>
  );
};

export default Products;
