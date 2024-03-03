const express = require('express')
const { userRegister } = require('../Controller/UserController')


const userRouter = express.Router()


userRouter.route('/user/post').post(userRegister)

module.exports ={userRouter}