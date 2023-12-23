const knex = require('../../../bancoDeDados/conexao')

const validarIdCliente = async (req, res, next) => {
    const { id } = req.params

    try {
        const existeCliente = await knex('clientes').where({ id }).first()

        if (!existeCliente) {
            return res.status(404).json({ mensagem: 'Id do cliente não encontrado.'})
        }
        next()
    } catch (error) {
        return res.status(500).json({ mensagem: 'Erro interno do servidor.'})
    }
}

module.exports = validarIdCliente