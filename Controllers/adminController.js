const { request } = require("express");
const admins = require("../Models/adminSchema");
const musics = require("../Models/userSchema");

exports.addAdmin = async (req, res) => {
    console.log("inside add adminController");
    const userId = req.payload;
    console.log(userId);

    try {
        const { title, audio } = req.body;

        // Extracting filenames for image and audio from the uploaded files
        const image = req.files.find(file => file.fieldname === 'image').filename;
        const audioFile = req.files.find(file => file.fieldname === 'audio').filename;

        const existingAdmin = await admins.findOne({ audio: audio });
        if (existingAdmin) {
            res.status(406).json("Music already exists. Please upload a new one.");
        } else {
            const newMusic = new admins({
                title: title,
                image: image,
                audio: audioFile,
                userId: userId
            });
            await newMusic.save();
            res.status(200).json("Music added successfully.");
        }
    } catch (err) {
        res.status(401).json("Unable to add music due to: " + err);
    }
};

exports.getAllMusic = async(req,res)=>{
    const searchKey = req.query.search;
    console.log(searchKey);
    const Query = {
    title: {
            //regular expression
            //i= to remove case sensitivity
            $regex: searchKey, $options: "i"
        }
    }
    try{
        const allMusic = await admins.find(Query);
        res.status(200).json(allMusic)

    }catch(err){
        res.status(401).json("Request failed due to ", err)
    }
}