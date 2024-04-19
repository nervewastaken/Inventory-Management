import React, { Fragment, useEffect, useState } from "react";
import "./App.css";
import InputProd from "./component/inputprod";

function App() {
  const [prod, setProd] = useState([]);
  const [invsize, setinvsize] = useState("");
  const [comments, setcomments] = useState("");
  const [supervisor, setsupervisor] = useState("");
  const [prodid, setprodid] = useState("");
  const [showContent, setShowContent] = useState(false);

  const deleteProd = async (prodid) => {
    try {
      const deleteprod = await fetch(
        `http://localhost:4000/addprod/${prodid}`,
        {
          method: "DELETE",
        },
      );
      fetchProducts();
    } catch (err) {
      console.log(err);
    }
  };

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

  const toggleContent = () => {
    setShowContent(!showContent);
  };

  const onSubmitForm2 = async (e) => {
    e.preventDefault();
    try {
      const body = {
        invsize,
        comments,
        supervisor,
      };

      if (!prodid || !invsize || !comments || !supervisor) {
        window.alert("Please fill in all details.");
        return; // Stop execution if any field is empty
      }

      if (prodid < 0 || !Number.isInteger(+prodid)) {
        window.alert("Invalid input for Product ID.");
        return; // Stop execution if product ID is invalid
      }

      const response = await fetch(
        `http://localhost:4000/addinventory/${prodid}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        },
      );

      if (response.ok) {
        console.log("Inventory details added successfully");
        window.location.reload();
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Fragment>
      <InputProd />
      <div className="main">
        {/* Left half of the page */}
        <div className="left-half">
          <table>
            <thead>
              <tr>
                <th>Product ID</th>
                <th>Product Name</th>
                <th>Product Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {prod.map((product) => (
                <tr key={product.prodid}>
                  <td>{product.prodid}</td>
                  <td>{product.prodname}</td>
                  <td>{product.prodprice}</td>
                  <td>
                    <button
                      className="btn-delete"
                      onClick={() => deleteProd(product.prodid)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Right half of the page */}
        <div className="right-half">
          {/* Form 2 */}
          <div className="form2">
            <form onSubmit={onSubmitForm2}>
              <input
                type="number"
                value={prodid}
                onChange={(e) => setprodid(e.target.value)}
                placeholder="Product ID"
              />
              <input
                type="number"
                value={invsize}
                onChange={(e) => setinvsize(e.target.value)}
                placeholder="Inventory Size"
              />
              <input
                type="text"
                value={comments}
                onChange={(e) => setcomments(e.target.value)}
                placeholder="Comments"
              />
              <input
                type="text"
                value={supervisor}
                onChange={(e) => setsupervisor(e.target.value)}
                placeholder="Supervisor"
              />
              <button type="submit">Add Inventory Details</button>
            </form>
          </div>

          {/* Table 2 for Form 2 */}
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
                {prod.map((product) => (
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
        </div>
      </div>

      {/* ABOUT US SECTION */}
      <button className="toggle-button" onClick={toggleContent}>
        About Us
      </button>

      {/* About us page */}
      <div
        className="container"
        style={{ display: showContent ? "block" : "none" }}
      >
        <div className="content">
          <div className="susdiv">
            <h2>About Us</h2>
            <h3>Project for Web Programming</h3>
            <p>Made by</p>
            <p>Krish Verma</p>
            <p>V Hemal Sri</p>
            <p>Muhammed Sirfan</p>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
