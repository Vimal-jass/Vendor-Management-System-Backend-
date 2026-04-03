const express = require('express')
const authController = require('../controller/auth.controller')


const route = express.Router()


route.post('/auth/register',authController.registerUser )



module.exports = route;