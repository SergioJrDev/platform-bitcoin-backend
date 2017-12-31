const throwSchema = require('./throwSchema')

throwSchema.methods(['get', 'post', 'put', 'delete'])
throwSchema.updateOptions({new: true, runValidators: true})

module.exports = throwSchema