const knex = require('../../../bancoDeDados/conexao')

const validarClienteIdBody = async (req, res, next) => {
    const { cliente_id } = req.body

    try {
        const existeClienteId = await knex('clientes').where({ id: cliente_id }).first()
        
        if (!existeClienteId) {
            return res.status(404).json({ mensagem: 'Id do cliente não encontrado.'})
        }
        next()
    } catch (error) {
        return res.status(500).json({ mensagem: 'Erro interno do servidor.'})
    }
}

module.exports = validarClienteIdBody