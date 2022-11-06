const e = require("express");
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/Registration",{
    
}).then(()=>{
    console.log("connected successful");
}).catch((e)=>{
    console.log("No connection");
})