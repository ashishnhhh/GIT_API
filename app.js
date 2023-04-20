const express = require("express");
const app = express();
const PORT = process.env.PORT || 3500
const collegeinfo_Routes = require("./route/collegeinfo")

app.get("/", (res,req) => {
    req.send("this server is online");
});


//MIDDILEWARE API
app.use("/colleges",collegeinfo_Routes);

const start = async() => {
    try {
        app.listen(PORT, () => {
            console.log(`this server is online in this port ${PORT}`);
        });
    } catch (error) {
        console.log(error);
    }
};
start();