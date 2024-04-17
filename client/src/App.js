import React, { Fragment, useEffect, useState } from "react";
import './App.css';
import InputProd from "./component/inputprod";


function App() {
  const [prod, setProd] = useState([]);
  const [invsize, setinvsize] = useState("");
  const [comments, setcomments] = useState("");
  const [supervisor, setsupervisor] = useState("");
  const [prodid, setprodid] = useState("");

  const deleteProd = async (prodid) => {
    try{
      // eslint-disable-next-line no-unused-vars
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

  //inventory stuff

  const onSubmitForm2 = async (e) => {
    e.preventDefault();
    try {
      const body = {
        invsize,
        comments,
        supervisor
      };
  
      const response = await fetch(`http://localhost:4000/addinventory/${prodid}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });
      
      
      if (response.ok) {
        console.log("Inventory details added successfully");
        window.location.reload();
      } 
    } catch (err) {
      console.error(err);
    }
  };
  
// for hemal and sirfan 

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

      <div className="line"></div>

{/* form 2 */}


<div className="form2">
      <form onSubmit={onSubmitForm2}>
        <input 
          type="number"
          value={prodid}
          onChange={e => setprodid(e.target.value)}
          placeholder="Product ID"
        />

        <input 
          type="number"
          value={invsize}
          onChange={e => setinvsize(e.target.value)}
          placeholder="Inventory Size"
        />

        <input 
          type="text"
          value={comments}
          onChange={e => setcomments(e.target.value)}
          placeholder="Comments"
        />
        
        <input 
          type="text"
          value={supervisor}
          onChange={e => setsupervisor(e.target.value)}
          placeholder="Supervisor"
        />

        <button type="submit">Add Inventory Details</button>
      </form>
    </div>

    {/* table2 for form 2 */}

      <div className="inventory">
      <table>
          <thead>
            <tr>
              <th>Product ID</th>
              <th>Product Name</th>
              <th>Product Price</th>
              <th>Inventory</th>
              <th>Comments</th>
              <th>Supervisor</th>
            </tr>
          </thead>
          <tbody>
            {prod.map(product => (
              <tr key={product.prodid}>
                <td>{product.prodid}</td>
                <td>{product.prodname}</td>
                <td>{product.prodprice}</td>
                <td>{product.invsize}</td>
                <td>{product.comments}</td>
                <td>{product.supervisor}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      
    </Fragment>
  );
}

//for hemal and sirfan

export default App;
