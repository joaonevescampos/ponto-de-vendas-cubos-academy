const joi = require('joi')

const schemaCadastroCliente = joi.object({
    nome: joi.string().required().messages({
        'any.required': 'O campo nome é obrigatório.',
        'string.empty': 'O campo nome é obrigatório.',
        'string.base': 'Tipo de valor inválido no campo nome.'
    }),

    email: joi.string().email().required().messages({
        'string.email': 'O campo email precisa ter um formato válido.',
        'any.required': 'O campo email é obrigatório.',
        'string.empty': 'O campo email é obrigatório.'
    }),

    cpf: joi.string().length(11).required().messages({
        'any.required': 'O campo cpf é obrigatório.',
        'string.empty': 'O campo cpf é obrigatório.',
        'string.length': 'O cpf deve conter 11 caracteres.'
    }),
    cep: joi.string(),
    rua: joi.string(),
    numero: joi.string(),
    bairro: joi.string(),
    cidade: joi.string(),
    estado: joi.string()
})

module.exports = schemaCadastroCliente

