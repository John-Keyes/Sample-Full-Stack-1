require("dotenv").config();
const express = require("express");
//const cors = require("cors");
const app = express();
//const helmet = require("helmet");
const studentRouter = require("./api/routes/students");

//app.use(helmet);

//Cross-Origin
//app.use(cors());

// set port, listen for requests

// const Port = process.env.port; // with the actual database

app.listen(process.env.api_Port);

// Json Parser
app.use(express.json());
// Parses url encoded 
app.use(express.urlencoded({ extended: false }));
// home 
app.use("/students", studentRouter);

app.use("*", (req, res) => res.status(404).json({message: "Create page not found thing."}));



