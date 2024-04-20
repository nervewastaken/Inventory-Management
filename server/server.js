const express = require("express");
const cors = require("cors");
const pool = require("./database");
const app = express();

app.use(express.json());
app.use(cors());



//localhost:3000
//localhost:4000

//add inventory 1st one

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


//add inventory

app.post("/addinventory/:prodid", async (req, res) => {
    try {
        const { prodid } = req.params;
        const { invsize, comments, supervisor } = req.body;
        
        // Update inventory size
        await pool.query('UPDATE proddeets SET invsize = $1 WHERE prodid = $2', [invsize, prodid]);
        
        // Update comments
        await pool.query('UPDATE proddeets SET comments = $1 WHERE prodid = $2', [comments, prodid]);
        
        // Update supervisor
        await pool.query('UPDATE proddeets SET supervisor = $1 WHERE prodid = $2', [supervisor, prodid]);

        res.status(200).send("Inventory details added successfully");
    } catch (err) {
        console.log(err);
    }
});

app.post("/login", async (req, res) => {
    try {
        const { username, password } = req.body;
        
        // Check if the username exists and the password is correct
        const user = await pool.query('SELECT * FROM users WHERE username = $1 AND password = $2', [username, password]);
        
        if (user.rows.length === 1) {
            // If username and password match, send success response
            res.status(200).json({ message: "Login successful" });
        } else {
            // If username or password is incorrect, send error response
            res.status(401).json({ message: "Invalid username or password" });
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Internal Server Error" });
    }
});


app.listen(4000, () => console.log("Server on localhost:4000"))
