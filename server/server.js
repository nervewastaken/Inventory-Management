const express = require("express");
const cors = require("cors");
const pool = require("./database");
const app = express();

app.use(express.json());
app.use(cors());
const port = process.env.PORT || 3000;


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
        
        // Check if prodid exists in the database
        const existingProduct = await pool.query('SELECT * FROM proddeets WHERE prodid = $1', [prodid]);
        if (existingProduct.rows.length === 0) {
            return res.status(404).send("Error 404 : Product ID not found");
        }

        // Update inventory size, comments, supervisor, and "update" column with current date
        await pool.query('UPDATE proddeets SET invsize = $1, comments = $2, supervisor = $3, dateup = CURRENT_TIMESTAMP WHERE prodid = $4', [invsize, comments, supervisor, prodid]);

        res.status(200).send("Inventory details added successfully");
        console.log("Inventory details added successfully");
    } catch (err) {
        console.error(err);
        res.status(500).send("Internal server error");
    }
});




const server = app.listen(port, () => console.log(`Server on localhost:${port}`));

// Handle SIGTERM for clean shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM received. Shutting down gracefully...');
  server.close(() => {
    console.log('HTTP server closed.');
    process.exit(0); // Exit with success code
  });
});

// Handle SIGINT (optional, for local Docker stops)
process.on('SIGINT', () => {
  console.log('SIGINT received. Shutting down...');
  server.close(() => {
    console.log('HTTP server closed.');
    process.exit(0); // Exit with success code
  });
});