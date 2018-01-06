const userInfoSchema = require('./userInfoSchema')

userInfoSchema.methods(['get', 'post', 'put', 'delete'])
userInfoSchema.updateOptions({new: true, runValidators: true})

userInfoSchema.route('search', (req, res, next) => {
  const query = req.query.user || ''
  userInfoSchema.find({nome: {$regex : ".*"+ query +".*", $options: 'i'}}, (err, data) => {
    err ? console.log('error') : res.json(data)
  })
})

module.exports = userInfoSchema