require("dotenv").config();
const mongoose = require("mongoose");


const connectDB = (uri) =>{
    console.log("connectDB");
    return mongoose.connect(uri,{
        UseNewUrlParser:true,
        UseUnifiedTopology:true
    });
};

module.exports = connectDB;