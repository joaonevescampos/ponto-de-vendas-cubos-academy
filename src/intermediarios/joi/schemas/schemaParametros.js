const joi = require('joi')

const schemaQuery = joi.object({
    categoria_id: joi.number().positive().integer().messages({
        'number.positive': 'O parâmetro categoria_id tem que ser um numero positivo.',
        'number.base': 'O parâmetro categoria_id tem que ser um numero.',
        'number.integer': 'O parâmetro categoria_id tem que ser um numero inteiro.'
    })
})


const schemaClienteId = joi.object({
    cliente_id: joi.number().positive().integer().messages({
        'number.positive': 'O parâmetro categoria_id tem que ser um numero positivo.',
        'number.base': 'O parâmetro categoria_id tem que ser um numero.',
        'number.integer': 'O parâmetro categoria_id tem que ser um numero inteiro.'
    })
})

const schemaParams = joi.object({
    id: joi.number().positive().integer().messages({
        'number.positive': 'O parâmetro tem que ser um numero positivo.',
        'number.base': 'O parâmetro tem que ser um numero.',
        'number.integer': 'O parâmetro tem que ser um numero inteiro.'
    })
})

module.exports = { schemaParams, schemaQuery, schemaClienteId }
