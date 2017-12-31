const historySchema = require('./historySchema')

historySchema.methods(['get', 'post', 'put', 'delete'])
historySchema.updateOptions({new: true, runValidators: true})

historySchema.route('count', (req, res, next) => {
    historySchema.count((error, value) => {
        error ? res.status(500).json({errors: [error]}) : res.json({value})
    })
})

module.exports = historySchema