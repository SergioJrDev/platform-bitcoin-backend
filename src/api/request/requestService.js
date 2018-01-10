const requestSchema = require('./requestSchema')
const errorHandler = require('./../../commons/errorHandler')

requestSchema.methods(['get', 'post', 'put', 'delete'])
requestSchema.updateOptions({new: true, runValidators: true})
requestSchema.after('post', errorHandler).after('put', errorHandler)

requestSchema.route('count', (req, res, next) => {
    requestSchema.count((error, value) => {
        error ? res.status(500).json({errors: [error]}) : res.json({value})
    })
})

requestSchema.route('search', (req, res, next) => {
  requestSchema.find({userId: req.query.user}, (err, data) => {
      err ? console.log('Error - Request Search') : res.json(data);
  })
})

module.exports = requestSchema