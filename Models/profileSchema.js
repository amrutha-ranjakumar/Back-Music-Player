const mongoose = require('mongoose')


const profileSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    phoneno: {
        type: String,
        require: true
    },
    profileimage: {
        type: String,
        require: true
    },
    userId:{
        type:String,
        require:true
     }

})
const profils = mongoose.model("profils",profileSchema)

module.exports = profils 