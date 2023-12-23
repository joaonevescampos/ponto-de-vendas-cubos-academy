const knex = require('../../../bancoDeDados/conexao')

const validarIdProduto = async (req, res, next) => {
    const { id } = req.params

    try {
        const existeId = await knex('produtos').where('id', id)

        if (existeId.length === 0) {
            return res.status(400).json({ mensagem: 'Id inválido' })
        }

        next()
    } catch (error) {
        return res.status(500).json({ mensagem: 'Erro interno do servidor.' })
    }
}

module.exports = validarIdProduto