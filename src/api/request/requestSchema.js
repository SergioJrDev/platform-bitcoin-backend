const restful = require('node-restful');
const mongoose = restful.mongoose;
var Joigoose = require('joigoose')(mongoose);
const Joi =  require('joi')

const requestObject = Joi.object({
    userId: Joi.string().required(),
    email: Joi.string().required().email(),
    date: Joi.date().required(),
    userName: Joi.string().required(),
    action: Joi.string().required().uppercase(),
    value: Joi.number().required().min(0),
    status: Joi.string().uppercase()
})

const requestSchema = new mongoose.Schema(Joigoose.convert(requestObject))


module.exports = restful.model('requestSchema', requestSchema)

// userId:41149403837
// date:10/07/1991
// userName:Sérgio Júnior
// action:SAQUE
// value:1500
// status:PENDENTE