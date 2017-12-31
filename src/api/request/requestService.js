const requestSchema = require('./requestSchema')

requestSchema.methods(['get', 'post', 'put', 'delete'])
requestSchema.updateOptions({new: true, runValidators: true})

requestSchema.route('count', (req, res, next) => {
    requestSchema.count((error, value) => {
        error ? res.status(500).json({errors: [error]}) : res.json({value})
    })
})

module.exports = requestSchema