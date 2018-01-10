const restful = require('node-restful'), mongoose = restful.mongoose;

const userBankSchema = new mongoose.Schema({
    name: { type: String, required: true },
    ag: { type: String, required: true },
    cc: { type: String, required: true },
})

const userContactSchema = new mongoose.Schema({
  email: { type: String, required: true },
  phone: { type: String, required: true },
})

const userAddressSchema = new mongoose.Schema({
    address: { type: String, required: true },
    number: { type: Number, required: true },
    complemento: { type: String },
    cep: { type: String, required: true },
    bairro: { type: String, required: true },
    estado: { type: String, required: true },
})

const userInfoSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    sobrenome: { type: String, required: true },
    nascimento: { type: Date, required: true },
    rg: { type: Number, required: true, maxLength: 11, minLength: 8 },
    cpf: { type: Number, required: true, maxLength: 14, minLength: 11 },
    contact: userContactSchema,
    address: userAddressSchema,
    bank: userBankSchema,
})

module.exports = restful.model('userInfoSchema', userInfoSchema)

/*
Modelo
nome: Natália
sobrenome: Carolina Fazzolari
nascimento: 10/07/1991
rg: 484912562
cpf: 49785578932
address.address: Av Alberto Byington
address.number: 178
address.complemento: Apto 10
address.cep: 02127000
address.bairro: Vila Maria
address.estado: SP
bank.name: Itau
bank.ag: 0350
bank.cc: 0971169
*/
