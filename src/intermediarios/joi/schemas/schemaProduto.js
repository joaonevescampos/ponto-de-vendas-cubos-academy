const joi = require('joi')

const schemaProduto = joi.object({
    descricao: joi.string().required().messages({
        'any.required': 'O campo descricao é obrigatório',
        'string.empty': 'O campo descricao é obrigatório',
        'string.base': 'Tipo de caractere é inválido no campo descricao'
    }),

    quantidade_estoque: joi.number().positive().integer().required().messages({
        'any.required': 'O campo quantidade em estoque é obrigatório.',
        'number.positive': 'O campo quantidade em estoque tem que ser positivo.',
        'number.integer': 'O campo quantidade_estoque tem que ser um numero inteiro.',
        'number.base': 'O campo quantidade em estoque tem que ser um número.'

    }),

    valor: joi.number().positive().integer().required().messages({
        'any.required': 'O campo valor é obrigatório.',
        'number.positive': 'O campo valor tem que ser positivo.',
        'number.integer': 'O campo valor tem que ser um numero inteiro.',
        'number.base': 'O campo valor tem que ser um número.'

    }),

    categoria_id: joi.number().positive().integer().required().messages({
        'number.base': 'O campo categoria_id tem que ser um numero.',
        'number.positive': 'O campo categoria_id tem que ser positivo.',
        'number.integer': 'O campo categoria_id tem que ser um numero inteiro.',
        'any.required': 'O campo categoria_id é obrigatório.',

    })
})

module.exports = schemaProduto;