const knex = require('../../../bancoDeDados/conexao')

const validarExclusao = async (req, res, next) => {
    const { id } = req.params

    try {
        const existePedido = await knex('pedido_produtos')
            .where('produto_id', id)
            .first()

        if (existePedido) {
            return res.status(403).json({ mensagem: 'Produto vinculado a um pedido. Não pode ser excluído.' })
        }

        next()

    } catch (error) {
        return res.status(500).json({ mensagem: 'Erro interno do servidor.' })
    }
}

module.exports = validarExclusao