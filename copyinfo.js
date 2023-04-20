require("dotenv").config();
const connectDB = require("./DATABASE/connect")
const college = require("./model/collegeinfo");
const copydbjson = require("./copydb.json")

const start = async () =>{
    try {
        await connectDB(process.env.MONGODB_URI);
        await college.create(copydbjson);
        
        console.log("success");
    } catch (error) {
        console.log(error);
    }
};
start();