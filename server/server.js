const express = require("express");
const cors = require("cors");
const pool = require("./database");
const app = express();

app.use(express.json());
app.use(cors());


//localhost:3000
//localhost:4000

app.post("/addprod", (req, res) => {
    const prodid = req.body["prodid"];
    const prodname = req.body["prodname"];
    const price = req.body["price"];

    console.log("Product ID" + prodid);
    console.log("Product Name" + prodname);
    console.log("Product Price" + price);

    const insertproddeet = `INSERT INTO proddeets ( prodid , prodname, prodprice ) VALUES ( '${prodid}','${prodname}','${price}');`

    pool.query(insertproddeet).then((response) => {
        console.log("Data Saved")
        console.log(response)
    })
    .catch((err) => {
        console.log(err)
    })

    console.log(req.body);
    res.send("Response Received" + req.body);
});


//get all prod details

app.get("/addprod", async(req,res) => {
    try{
        const allprod = await pool.query("SELECT * from proddeets");
        res.json(allprod.rows);
    } catch(err){
        console.log(err);
    }
});

//get one prod

app.get("/addprod/:prodid" , async(req,res) => {
    try{
        const {prodid} = req.params;
        const prod = await pool.query(`SELECT * from proddeets WHERE prodid = ${prodid}`);
        res.json(prod.rows[0]);
        console.log(req.params);
    } catch(err){
        console.log(err);
    }
});

//update a product

// app.put("/addprod/:prodid", async(req,res) => {
//     try{

//         const {prodid} = req.params;
//         const {}
//     } catch(err){
//         console.log(err);

//     }
// })

//delete a prod

app.delete("/addprod/:prodid", async(req,res) => {
    try{
        const {prodid} = req.params;
        const deleteprod = await pool.query(`DELETE FROM proddeets WHERE prodid = ${prodid}`);
        res.json("Todo was deleted");
    }
    
    catch(err){
        console.log(err);
    }
});



app.listen(4000, () => console.log("Server on localhost:4000"))
