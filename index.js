const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://test123:test123@cluster0.mcsnqmn.mongodb.net/"
).then(()=>console.log("DB connection successfull")).catch((err)=>{
    console.log(err);
});

app.listen(5000, ()=>{
    console.log("Backend server is running");
});