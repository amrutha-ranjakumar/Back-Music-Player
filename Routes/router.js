// path to resolve each client request
const userController = require('../Controllers/userController')
const adminController =require('../Controllers/adminController')
const jwtMiddleware =require('../MiddleWares/jwtMiddleware')
const multerConfig =require('../MiddleWares/multerMiddleware')


//1)import express
const express = require("express")

//2)create an object for the class router in express
const router = new express.Router();

router.post('/user/register', userController.register)


router.post('/user/login', userController.login)


router.post("/admin/add",jwtMiddleware,multerConfig.any(),adminController.addAdmin)



//5)get all projects
router.get('/music/all-music',jwtMiddleware,adminController.getAllMusic)



//4)export router
module.exports = router;