const express = require('express')
const app = express()
const cors=require("cors")
require("dotenv").config({ path: "./config/.env" });
const  db  = require("./config/db");
db();
const user=require("./Route/userroute")
const auth=require("./Route/auth")
const payment=require("./Route/paymentRoute")


app.use(cors())
app.use(express.json())
app.use("/api/v1/user",user)
//http://localhost:5003/api/v1/user/create
app.use("/api/v1/",auth)
//http://localhost:5003/api/v1/login
app.use("/api/v1/",payment)

const {PORT}=process.env
app.listen(PORT, () => console.log(`http://localhost:${PORT}!`))