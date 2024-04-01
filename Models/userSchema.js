const mongoose = require('mongoose')

//create schema for users
const userSchema = new mongoose.Schema({
    username:{
          type:String,
          require:true
    },
    email:{
         type:String,
         require:true
    },
    password:{
        type:String,
        require:true
    }
    


})

const musics = mongoose.model("musics",userSchema)
module.exports = musics;