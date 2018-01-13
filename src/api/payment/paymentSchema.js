const restful = require('node-restful')
const mongoose = restful.mongoose
require('mongoose-type-email');

const paymentSchema = new mongoose.Schema({
    email: { type: mongoose.SchemaTypes.Email, required: true },
    userName: { type: String, required: true },
    data: { type: Date, required: true },
    tipo: { type: String, required: true, enum: ['INVESTIMENTO', 'SAQUE', 'RENDIMENTO'], uppercase: true},
    value: { type: Number, required: true },
})

module.exports = restful.model('paymentSchema', paymentSchema)

// userId: 41149403837
// userName: Sérgio Junior
// data: 12/31/2017
// tipo: SAQUE
// value: 1000
// totalAmount: 0