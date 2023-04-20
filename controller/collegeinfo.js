const college = require("../model/collegeinfo");

const getcollegeinfo = async(req,res) => {

    const alldata = await college.find({})

    res.status(200).json({alldata});

};

module.exports = {getcollegeinfo};