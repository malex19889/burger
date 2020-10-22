// import the following:
const express = require("express");
const burger = require("../models/burger");

// Create the router for the app
const router = express.Router();
// 
router.get("/",function(req,res){
    burger.selectAll(function(data){
        console.log(data);
        let hbsObject = {
            burger: data
        };
        res.render("index",hbsObject);
    })
})
// listener for new burger
router.post("/api/burgers",function(req,res){
    burger.insertOne(req.body.burger_name, function (result) {
        res.json({ id: result.insertId });
      });
})
//  listener for burger status update
router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    console.log("condition", condition);
  /* needs work to update back to false...
  review MVC activs...
  burger devoured status updater*/
    burger.updateOne(
      {
        devoured: true
      },
      condition,
      function(result) {
        if (result.changedRows === 0) {
          
          return res.status(404).end();
        }
        res.status(200).end();
  
      }
    );
  });

// export thr express router
module.exports = router;