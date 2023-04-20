require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3500
const collegeinfo_Routes = require("./route/collegeinfo")
const connectDB = require("./DATABASE/connect")

app.get("/", (res,req) => {
    req.send("this server is online");
});


//MIDDILEWARE API
app.use("/colleges",collegeinfo_Routes);

const start = async() => {
    try {
        await connectDB(process.env.MONGODB_URI);

        app.listen(PORT, () => {
            console.log(`this server is online in this port ${PORT}`);
        });
    } catch (error) {
        console.log(error);
    }
};
start();