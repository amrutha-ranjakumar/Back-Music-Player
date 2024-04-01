const multer = require('multer')





const storage = multer.diskStorage({
    destination: (req, File, callback) => {
        callback(null, './uploads')
    },
    filename: (req, file, callback) => {
        const filename = `file-${Date.now()}-${file.originalname}`
        callback(null, filename)
    }


})
const fileFilter = (req, file, callback) => {
    if ((file.mimetype.startsWith('image/') && ['image/png', 'image/jpeg', 'image/jpg'].includes(file.mimetype)) ||
    (file.mimetype.startsWith('audio/') && ['audio/mpeg', 'audio/mp3'].includes(file.mimetype)) 
           

    ) {
        callback(null, true);
    } else {
        callback(null, false);
        return callback(new Error("only png,jpeg,jpg and mp3 files are allowed"))
    }
}
const multerConfig = multer({
    storage,
    fileFilter
})
module.exports = multerConfig;   