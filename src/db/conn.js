const e = require("express");
const mongoose = require("mongoose");

mongoose.connect("mongodb://Sorna:sorna2108@ac-fd0tjyx-shard-00-00.ahfarm2.mongodb.net:27017,ac-fd0tjyx-shard-00-01.ahfarm2.mongodb.net:27017,ac-fd0tjyx-shard-00-02.ahfarm2.mongodb.net:27017/?ssl=true&replicaSet=atlas-qd0b4j-shard-0&authSource=admin&retryWrites=true&w=majority",{
    
}).then(()=>{
    console.log("connected successful");
}).catch((e)=>{
    console.log("No connection");
})