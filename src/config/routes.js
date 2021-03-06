const express = require('express')
const router = express.Router()
const Request = require('./../api/request/requestService')
const UserInfo = require('./../api/userInfo/userInfoService')
const Payment = require('./../api/payment/paymentService')
const authService = require('./../api/user/userService')
const auth = require('./auth')
const protectedApi = express.Router()
const openApi = express.Router()

module.exports = function(server){

    // URL base
    server.use('/api', protectedApi)
    protectedApi.use(auth)
    Request.register(protectedApi, '/request')
    UserInfo.register(protectedApi, '/userinfo')
    Payment.register(protectedApi, '/payment')

    server.use('/oapi', openApi)
    openApi.post('/login', authService.login)
    openApi.post('/signup', authService.signup)
    openApi.post('/validateToken', authService.validateToken)
}