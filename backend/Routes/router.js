const express = require('express')
// import { uploads } from './../index';
const userController = require('../controllers/userController')
const router = new express.Router()
const multerInstance = require('../multerConfig/multerMiddleware')


router.post('/register', userController.register)
router.post('/login', userController.login)
router.post('addimage/:email', multerInstance.single('user_image'), userController.addimage)


module.exports = router