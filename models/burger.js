// import orm object
const orm = require("../config/orm");
// Also inside burger.js, create the code that will call the ORM functions using burger specific input for the ORM.
const burger = {
   // select all burgers in the database
   selectAll : function(cb){
    orm.selectAll("burgers", function(res){
        cb(res);
    });
   },
   // add a burger to the database
   insertOne: function(col,val,cb){
       orm.insertOne("burgers",col,val,function(res){
           cb(res);
       });
   },
   // update a burgers devoured state
   updateOne: function(objColVals,condition,cb){
       orm.updateOne("burgers",objColVals,condition,function(res){
           cb(res);
       });
   }
}
// export burger object
module.exports = burger;