const dotenv = require("dotenv");
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser')
const express = require('express');
require('dotenv').config();
const app = express();
const cors= require("cors")

const connectDB =require('./db/conn');
const PORT = process.env.PORT || 5000; 
connectDB();  
app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use(express.static(__dirname));
// app.get('/',(req, res)=>{
//     res.send('hello world')
// })
// STEP 3 
if(process.env.NODE_ENV=="production"){
    app.use(express.static("client/build"));
}
// we link the router files to make our route easy 
app.use(require('./router/assignTask'))


app.listen(PORT, () => {
    console.log(`server is runnig at port no ${PORT}`);
})