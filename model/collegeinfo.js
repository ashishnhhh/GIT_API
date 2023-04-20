const mongoose = require("mongoose");
const collegeinfoschema = new mongoose.Schema({

    District:{
        type:String,
        Required:true,
    },

    CollegeName:{
        type:String,
        Required:true,
    },

    CollegeCodeID:{
        type:String,
        Required:true,
    },
    
});
module.exports = mongoose.model("college", collegeinfoschema);