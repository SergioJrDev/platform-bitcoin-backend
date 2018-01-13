const paymentSchema = require('./paymentSchema')
const errorHandler = require('./../../commons/errorHandler')

paymentSchema.methods(['get', 'post', 'put', 'delete'])
paymentSchema.updateOptions({new: true, runValidators: true})
paymentSchema.after('post', errorHandler).after('put', errorHandler)

paymentSchema.route('search', (req, res, next) => {
    paymentSchema.find({email: req.query.user}, (err, data) => {
        err ? console.log('Error - payment Search') : res.json(data);
    })
})

// localhost:3003/api/payment/search?user=41149403837

module.exports = paymentSchema