const express = require('express')
const { userRegister, loginUser } = require('../Controller/UserController')



const userRouter = express.Router()


userRouter.route('/user/post').post(userRegister)
userRouter.route('/user/login').post(loginUser)

module.exports ={userRouter}