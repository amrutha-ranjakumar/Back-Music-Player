//import mongoose
const mongoose = require("mongoose")

const adminSchema = new mongoose.Schema({
   title:{
    type:String,
    require:true
   },
   image:{
    type:String,
    require:true
   },
   audio:{
    type:String,
    require:true
   },
  
   userId:{
      type:String,
      require:true
   }
})

const admins = mongoose.model("admins",adminSchema)


module.exports = admins;