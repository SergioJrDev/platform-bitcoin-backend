const restful = require('node-restful'), mongoose = restful.mongoose;

const historySchema = new mongoose.Schema({
    userId: { type: Number, required: true },
    date: { type: Date, required: true },
    userName: { type: String, required: true },
    action: { type: String, required: true },
    value: { type: Number, required: true, min: 0 },
    totalAmount: { type: Number, required: true },
    status: { type: String, required: true, uppercase: true,
        enum: ['PENDENTE', 'NEGADO', 'APROVADO']}
})


module.exports = restful.model('historySchema', historySchema)