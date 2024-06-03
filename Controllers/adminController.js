const { request } = require("express");
const admins = require("../Models/adminSchema");

exports.addAdmin = async (req, res) => {
    console.log("inside add adminController");

    const userId = req.payload;
    console.log(userId);

    try {
        const { title, rupee, movie, Directed, Producer, Music, Actors, name, date, rate, description, lyrics,video,advertisment,premium,name1,rate1,description1,date1 } = req.body;

        // Extracting filenames for image and audio from the uploaded files
        const image = req.files.find(file => file.fieldname === 'image').filename;
        const audioFile = req.files.find(file => file.fieldname === 'audio').filename;
        const advertismentFile = req.files.find(file => file.fieldname === 'advertisment').filename;
        const premiumFile = req.files.find(file => file.fieldname === 'premium').filename;
        const videofile= req.files.find(file => file.fieldname === 'video').filename;

        const existingAdmin = await admins.findOne({ audio: audioFile });
        if (existingAdmin) {
            res.status(406).json("Music already exists. Please upload a new one.");
        } else {
            const newMusic = new admins({
                title: title,
                image: image,
                audio: audioFile,
                rupee: rupee,
                movie: movie,
                Directed: Directed,
                Producer: Producer,
                Music: Music,
                Actors: Actors,
                name: name,
                date: date,
                rate: rate,
                description: description,
                lyrics: lyrics,
                video:videofile,
                advertisment:advertismentFile,
                premium:premiumFile,
                name1:name1,
                rate1:rate1,
                date1:date1,
                description1:description1,
                userId: userId
            });
            await newMusic.save();
            res.status(200).json("Music added successfully.");
        }
    } catch (err) {
        res.status(401).json("Unable to add music due to: " + err);
    }
};

exports.getAllMusic = async (req, res) => {
    const searchKey = req.query.search;
    console.log(searchKey);
    const Query = {
        title: {
            // regular expression
            // i= to remove case sensitivity
            $regex: searchKey, $options: "i"
        }
    }
    try {
        const allMusic = await admins.find(Query);
        res.status(200).json(allMusic);

    } catch (err) {
        res.status(401).json("Request failed due to ", err);
    }
}

// exports.getcenterMusic = async (req, res) => {
//     try {
//         const centerMusic = await admins.find().limit(4);
//         res.status(200).json(centerMusic);

//     } catch (err) {
//         res.status(401).json("Request failed due to", err);
//     }
// }
