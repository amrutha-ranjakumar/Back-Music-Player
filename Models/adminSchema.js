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
   rupee:{
      type:String,
      require:true
   },
   movie: {
      type: String,
      require: true
  },
  Directed: {
      type: String,
      require: true
  },
  Producer: {
      type: String,
      require: true
  },
  Music: {
      type: String,
      require: true
  },
  Actors: {
      type: String,
      require: true
  },
  name: {
      type: String,
      require: true
  },
  date: {
      type: String,
      require: true
  },
  rate: {
      type: String,
      require: true
  },
  description: {
      type: String,
      require: true
  },
  lyrics: {
      type: String,
      require: true
  },
  video: {
    type: String,
    require: true
},
advertisment:{
    type: String,
    require: true

},
premium: {
    type: String,
    require: true
},

name1: {
    type: String,
    require: true
},
rate1: {
    type: String,
    require: true
},
date1: {
    type: String,
    require: true
},
description1: {
    type: String,
    require: true
},
 userId:{
      type:String,
      require:true
   }
})

const admins = mongoose.model("admins",adminSchema)


module.exports = admins;