const restful = require('node-restful'), mongoose = restful.mongoose;

const requestSchema = new mongoose.Schema({
    userId: { type: Number, required: true },
    date: { type: Date, required: true },
    userName: { type: String, required: true },
    action: { type: String, required: true, uppercase: true,
      enum: ['SAQUE', 'INVESTIMENTO']},
    value: { type: Number, required: true, min: 0 },
    status: { type: String, uppercase: true,
        enum: ['NEGADO', 'APROVADO']}
})


module.exports = restful.model('requestSchema', requestSchema)

// userId:41149403837
// date:10/07/1991
// userName:Sérgio Júnior
// action:SAQUE
// value:1500
// status:PENDENTE