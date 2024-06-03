const profils = require("../Models/profileSchema");

exports.addprofile = async (req, res) => {
    console.log("inside addprofilecontroller");
    const userId = req.payload;
    console.log(userId);
    const profileimage = req.file.filename
    console.log(profileimage);
    const { username, email, phoneno} = req.body;

    try{
        const existingprofile = await profils.findOne({phoneno:phoneno})
        if(existingprofile){
            res.status(406).json('profile already exist ,upload a new one')
        }
        else{
            const newwprofile = new profils({
                username:username,
                email:email,
                phoneno:phoneno,
                profileimage:profileimage,
                userId:userId
            })
            await newwprofile.save();
            res.status(200).json("profile added successfully")
        }
        
    }catch(err){
        res.status(401).json("unable to add profile due to :",err)
    }
}



exports.getuserprofile = async (req, res) => {
    const userId = req.payload
    try {
        const userprofile = await profils.find().limit(1);
        res.status(200).json(userprofile)

    } catch (err) {
        res.status(401).json("request failed due to ", err)
    }
}
