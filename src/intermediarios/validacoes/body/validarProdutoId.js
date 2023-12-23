const knex = require('../../../bancoDeDados/conexao')

const validarProdutoIdBody = async (req, res, next) => {
    const { pedido_produtos } = req.body

    try {
        for (const objeto of pedido_produtos) {
            const existeProdutoId = await knex('produtos').where({ id: objeto.produto_id }).first()
        
            if (!existeProdutoId) {
                return res.status(404).json({ mensagem: 'Id do produto não encontrado.'})
            }
        }
        next()
    } catch (error) {
        return res.status(500).json({ mensagem: 'Erro interno do servidor.'})
    }
}

module.exports = validarProdutoIdBody