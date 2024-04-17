import React, { Fragment, useEffect, useState } from "react";
import './App.css';

import InputProd from "./component/inputprod";

function App() {
  const [prod, setProd] = useState([]);

  const deleteProd = async (prodid) => {
    try{
      const deleteprod = await fetch(`http://localhost:4000/addprod/${prodid}`,{
        method : "DELETE"
      });
      // Assuming you want to update the product list after deletion
      fetchProducts();
    }catch(err){
      console.log(err);
    }
  }

  const fetchProducts = async () => {
    try {
      const response = await fetch("http://localhost:4000/addprod");
      const jsonData = await response.json();
      setProd(jsonData);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <Fragment>
      <InputProd />
      <div className="">
        <table>
          <thead>
            <tr>
              <th>Product ID</th>
              <th>Product Name</th>
              <th>Product Price</th>
              <th>Action</th> {/* Added a column for the delete button */}
            </tr>
          </thead>
          <tbody>
            {prod.map(product => (
              <tr key={product.prodid}>
                <td>{product.prodid}</td>
                <td>{product.prodname}</td>
                <td>{product.prodprice}</td>
                <td><button className="btn-delete" onClick={() => deleteProd(product.prodid)}>Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Fragment>
  );
}

export default App;
