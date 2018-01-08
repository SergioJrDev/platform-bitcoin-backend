const requestSchema = require('./requestSchema')

requestSchema.methods(['get', 'post', 'put', 'delete'])
requestSchema.updateOptions({new: true, runValidators: true})

requestSchema.route('count', (req, res, next) => {
    requestSchema.count((error, value) => {
        error ? res.status(500).json({errors: [error]}) : res.json({value})
    })
})

requestSchema.route('search', (req, res, next) => {
  requestSchema.find({userId: req.query.user}, (err, data) => {
      err ? console.log('error') : res.json(data);
  })
})

module.exports = requestSchema