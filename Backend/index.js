const express = require("express");
const mysql = require('mysql');
const app = express();
const morgan = require("morgan");



app.use(morgan("combined"))
app.get("/patients", (req, res)=>{
	const connection = mysql.createConnection({
		host: "localhost",
		user: "root",
		database: "healthcard",
		password: ""
	})
	connection.query("Select * from patients", (err, rows, fields) => {
		console.log("Data fetched Successfully");
		res.json(rows)
	})
	
})


const port = 5000 || process.env.PORT;


app.listen(port, ()=>console.log("Server up and running on Port 5000"))