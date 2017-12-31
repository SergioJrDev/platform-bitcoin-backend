const express = require('express')
const router = express.Router()
const HistoryCicle = require('./../api/history/historyService')
const UserInfo = require('./../api/user/userInfoService')
const Throw = require('./../api/throw/throwService')

module.exports = function(server){
    // URL base
    server.use('/api', router)

    // Rotas
    HistoryCicle.register(router, '/history')
    // localhost:3003/api/history

    UserInfo.register(router, '/userinfo')
    // localhost:3003/api/userinfo
    
    Throw.register(router, '/throw')
    // localhost:3003/api/throw
}