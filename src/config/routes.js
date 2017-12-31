const express = require('express')
const router = express.Router()
const HistoryCicle = require('./../api/history/historyService')
const UserInfo = require('./../api/user/userInfoService')

module.exports = function(server){
    // URL base
    server.use('/api', router)

    // Rotas
    HistoryCicle.register(router, '/history')
    UserInfo.register(router, '/userinfo')
}