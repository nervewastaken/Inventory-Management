// AddInventory.js
import React, { useState } from "react";

const AddInventory = () => {
  const [prodid, setProdid] = useState("");
  const [invsize, setInvsize] = useState("");
  const [comments, setComments] = useState("");
  const [supervisor, setSupervisor] = useState("");

  const handleSubmit = async (e) => {
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
    <div className="form2">
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={prodid}
          onChange={(e) => setProdid(e.target.value)}
          placeholder="Product ID"
        />
        <input
          type="number"
          value={invsize}
          onChange={(e) => setInvsize(e.target.value)}
          placeholder="Inventory Size"
        />
        <input
          type="text"
          value={comments}
          onChange={(e) => setComments(e.target.value)}
          placeholder="Comments"
        />
        <input
          type="text"
          value={supervisor}
          onChange={(e) => setSupervisor(e.target.value)}
          placeholder="Supervisor"
        />
        <button type="submit">Update Inventory Details</button>
      </form>
    </div>
  );
};

export default AddInventory;
