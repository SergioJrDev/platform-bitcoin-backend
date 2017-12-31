const userInfoSchema = require('./userInfoSchema')

userInfoSchema.methods(['get', 'post', 'put', 'delete'])
userInfoSchema.updateOptions({new: true, runValidators: true})

module.exports = userInfoSchema