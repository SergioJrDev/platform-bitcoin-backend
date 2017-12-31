const restful = require('node-restful'), mongoose = restful.mongoose;

const userBankSchema = new mongoose.Schema({
    name: { type: String, required: true },
    ag: { type: Number, required: true },
    cc: { type: Number, required: true },
})

const userAddressSchema = new mongoose.Schema({
    address: { type: String, required: true },
    number: { type: Number, required: true },
    complemento: { type: String, required: true },
    cep: { type: String, required: true },
    bairro: { type: String, required: true },
    estado: { type: String, required: true },
})

const userInfoSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    sobrenome: { type: String, required: true },
    nascimento: { type: Date, required: true },
    rg: { type: Number, required: true, min: 8, max: 10 },
    cpf: { type: Number, required: true, min: 11, max: 14 },
    address: userAddressSchema,
    bank: userBankSchema,
})

module.exports = restful.model('userInfoSchema', userInfoSchema)