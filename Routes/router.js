// path to resolve each client request
const userController = require('../Controllers/userController')
const adminController =require('../Controllers/adminController')
const jwtMiddleware =require('../MiddleWares/jwtMiddleware')
const multerConfig =require('../MiddleWares/multerMiddleware')
const profileController =require('../Controllers/profileController')



//1)import express
const express = require("express")

//2)create an object for the class router in express
const router = new express.Router();


//3)use registration
router.post('/user/register', userController.register)

//4)user login
router.post('/user/login', userController.login)

//4)user login
router.post('/profile/add',jwtMiddleware,multerConfig.single('profileimage'),profileController.addprofile)

///
router.get('/profile/user-profile',jwtMiddleware,profileController.getuserprofile)

//5)add new music

router.post("/admin/add",jwtMiddleware,multerConfig.any(),adminController.addAdmin)

//6)get all music
router.get('/music/all-music',jwtMiddleware,adminController.getAllMusic)








//8)export router
module.exports = router;