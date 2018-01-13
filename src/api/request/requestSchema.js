const restful = require('node-restful'), mongoose = restful.mongoose;
require('mongoose-type-email');

const requestSchema = new mongoose.Schema({
    email: { type: mongoose.SchemaTypes.Email, required: true },
    date: { type: Date, required: true },
    userName: { type: String, required: true },
    action: { type: String, required: true, uppercase: true,
      enum: ['SAQUE', 'INVESTIMENTO']},
    value: { type: Number, required: true, min: 0 },
    status: { type: String, uppercase: true,
        enum: ['NEGADO', 'APROVADO']}
})


module.exports = restful.model('requestSchema', requestSchema)

// email: sergioamjr91@gmail.com
// date:10/07/1991
// userName:Sérgio Júnior
// action:SAQUE
// value:1500