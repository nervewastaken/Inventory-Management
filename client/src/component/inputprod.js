import React, {Fragment, useState} from "react";

const InputProd = () => {

    const [prodid , setprodid] = useState("");
    const [prodname , setprodname] = useState("");
    const [price, setprice] = useState("");



    const onsubmitform = async e => {
        e.preventDefault();
        try{
            const body = {prodid,prodname,price};
            // eslint-disable-next-line no-unused-vars
            
            if (!prodid || !prodname || !price) {
                window.alert("Please fill in all details.");
              }
            if(prodid<0 || Number.isInteger(prodid)  ){
                window.alert("Product ID can't be negative or float");
              }

            if(price<0 || Number.isInteger(price)){
                window.alert("Product Price can't be negative or float")
                
            }
            else{
                const response = await fetch("http://localhost:4000/addprod", {
                method: "POST",
                headers: {"Content-Type":"application/json"},
                body : JSON.stringify(body)
            });
            }

            window.location = "/";
        }catch(err){
            console.log(err);
        }
    }

    // for hemal and sirfan 

    return(
        <Fragment>
        <h1>Products</h1>
        <form onSubmit={onsubmitform}>
        <input 
            type="number" 
            className="prodid" 
            value={prodid}
            onChange={e => setprodid(e.target.value)}
            placeholder="Product ID"
            />
        <input 
            type="text" 
            className="prodname" 
            value={prodname}
            onChange={e => setprodname(e.target.value)}
            placeholder="Product Name"
        />
        <input
            type="number" 
            className="prodprice" 
            value={price}
            onChange={e => setprice(e.target.value)}
            placeholder="Price"
        />
        <button className="btn-success" type="submit">Add Product</button>
        </form>
        </Fragment>
    );
}

//for hemal and sirfan

export default InputProd;