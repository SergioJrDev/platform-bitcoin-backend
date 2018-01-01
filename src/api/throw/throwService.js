const throwSchema = require('./throwSchema')

throwSchema.methods(['get', 'post', 'put', 'delete'])
throwSchema.updateOptions({new: true, runValidators: true})

throwSchema.route('search', (req, res, next) => {
    throwSchema.find({userId: req.query.user}, (err, data) => {
        err ? console.log('error') : res.json(data);
    })
})

// localhost:3003/api/throw/search?user=41149403837

module.exports = throwSchema