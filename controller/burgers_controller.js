// import the following:
const express = require("express");
const burger = require("../models/burger");

// Create the router for the app
const router = express.Router();

router.get("/",function(req,res){
    burger.selectAll(function(data){
        console.log(data);
        let hbsObject = {
            burger: data
        };
        res.render("index",hbsObject);
    })
})

// export thr express router
module.exports = router;