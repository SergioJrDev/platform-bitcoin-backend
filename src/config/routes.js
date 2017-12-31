const express = require('express')
const router = express.Router()
const Request = require('./../api/request/requestService')
const UserInfo = require('./../api/user/userInfoService')
const Throw = require('./../api/throw/throwService')

module.exports = function(server){
    // URL base
    server.use('/api', router)

    // Rotas
    Request.register(router, '/request')
    // localhost:3003/api/request

    UserInfo.register(router, '/userinfo')
    // localhost:3003/api/userinfo
    
    Throw.register(router, '/throw')
    // localhost:3003/api/throw
}