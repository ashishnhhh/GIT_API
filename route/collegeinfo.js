const express = require("express");
const router = express.Router();

const {getcollegeinfo} = require ("../controller/collegeinfo");

router.route("/").get(getcollegeinfo);

module.exports = router;