const userInfoSchema = require('./userInfoSchema')
const errorHandler = require('./../../commons/errorHandler')

userInfoSchema.methods(['get', 'post', 'put', 'delete'])
userInfoSchema.updateOptions({new: true, runValidators: true})
userInfoSchema.after('post', errorHandler).after('put', errorHandler)

userInfoSchema.route('searchbyname', (req, res, next) => {
  const query = req.query.user || ''
  userInfoSchema.find({nome: {$regex : ".*"+ query +".*", $options: 'i'}}, (err, data) => {
    err ? console.log('Error - Userinfo Search') : res.json(data)
  })
})

userInfoSchema.route('searchbyemail', (req, res, next) => {
  userInfoSchema.findOne({email: req.query.email}, (err, data) => {
      err ? console.log('Error - Request Search') : res.json(data);
  })
})

userInfoSchema.route('isadmin', (req, res, next) => {
  const admins = ['sergioamjr91@gmail.com', 'admin@mcsintermediacoes.com.br']
  res.json({ isAdmin: admins.includes(req.query.email)})
})

userInfoSchema.route('searchid', (req, res, next) => {
  userInfoSchema.findOne({email: req.query.email}, (err, data) => {
      console.log(req.query.email, data)
      err ? console.log('Error - Request Search') : res.json({userId: data.userId || null });
  })
})


module.exports = userInfoSchema