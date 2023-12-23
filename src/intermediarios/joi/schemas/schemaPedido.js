const joi = require('joi')

const schemaPedido = joi.object({
    cliente_id: joi.number().positive().integer().required().messages({
        'number.required': 'O campo cliente_id é obrigatório.',
        'number.positive': 'O campo cliente_id tem que ser positivo.',
        'number.integer': 'O campo cliente_id tem que ser um numero inteiro.',
        'number.base': 'O campo cliente_id tem que ser um número.'
    }),
    observacao: joi.string(),
    pedido_produtos: joi.array().min(1).required().items(
        joi.object({
            produto_id: joi.number().positive().integer().required().messages({
                'number.required': 'O campo produto_id é obrigatório.',
                'number.positive': 'O campo produto_id tem que ser positivo.',
                'number.integer': 'O campo produto_id tem que ser um numero inteiro.',
                'number.base': 'O campo produto_id tem que ser um número.',
                'any.required': 'O campo produto_id é obrigatório em todos os campos.'
            }),
            quantidade_produto: joi.number().positive().integer().required().messages({
                'number.base': 'O campo quantidade_produto tem que ser um numero.',
                'number.positive': 'O campo quantidade_produto tem que ser positivo.',
                'number.integer': 'O campo quantidade_produto tem que ser um numero inteiro.',
                'number.required': 'O campo quantidade_produto é obrigatório.',
                'any.required': 'O campo quantidade_produto é obrigatório.'
            })
        })
    ).messages({
        'any.required': 'O campo pedido_produtos é obrigatório.',
        'array.min': 'O array precisa conter, no mínimo, 1 produto.',
        'object.base': 'O item tem que ser um objeto.'
    })
})

module.exports = schemaPedido