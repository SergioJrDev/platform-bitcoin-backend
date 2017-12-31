var mongoose = require('mongoose');
mongoose.Promise = global.Promise

module.exports = mongoose.connect('mongodb://localhost/platform')

mongoose.Error.messages.general.required = "O campo '{PATH}' é obrigatório."
mongoose.Error.messages.Number.min = "O valor mínimo do campo '{PATH}' é '{MIN}'."
mongoose.Error.messages.Number.max = "O valor mínimo do campo '{PATH}' é '{MAX}'."
mongoose.Error.messages.String.enum = "O valor {VALUE} no campo {PATH} não é uma opção válida. Escolha PENDENTE, NEGADO OU APROVADO."