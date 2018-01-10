const mongoose = require('mongoose');
const url = process.env.MONGOLAB_URI || 'mongodb://localhost/platform'
mongoose.Promise = global.Promise

module.exports = mongoose.connect(url, {}, function(err) {
    if(err) {
        console.log('ERRO DATABASE >>>>>>>>', err)
    }
})

mongoose.Error.messages.general.required = "O campo '{PATH}' é obrigatório."
mongoose.Error.messages.Number.min = "O valor mínimo do campo '{PATH}' é '{MIN}'."
mongoose.Error.messages.Number.max = "O valor mínimo do campo '{PATH}' é '{MAX}'."
mongoose.Error.messages.String.enum = "O valor {VALUE} no campo {PATH} não é uma opção válida."