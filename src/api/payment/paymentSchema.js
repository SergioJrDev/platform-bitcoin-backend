const restful = require('node-restful')
const mongoose = restful.mongoose

const paymentSchema = new mongoose.Schema({
    userId: { type: Number, required: true },
    userName: { type: String, required: true },
    data: { type: Date, required: true },
    tipo: { type: String, required: true, enum: ['INVESTIMENTO', 'SAQUE', 'RENDIMENTO'], uppercase: true},
    value: { type: Number, required: true },
    totalAmount: { type: Number, required: false },
})

module.exports = restful.model('paymentSchema', paymentSchema)

// userId: 41149403837
// userName: Sérgio Junior
// data: 12/31/2017
// tipo: SAQUE
// value: 1000
// totalAmount: 0