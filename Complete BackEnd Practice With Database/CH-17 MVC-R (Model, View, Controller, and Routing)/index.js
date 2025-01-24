const express = require("express")
const app = express();
const dotenv = require("dotenv")
const ConnectDb = require("./App/Config/db")
const routerEnquiry = require("./App/Routes/userRouter")
dotenv.config();
//middleware
app.use(express.json());
app.use("/api",routerEnquiry)

//load the database
ConnectDb();


