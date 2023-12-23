const knex = require('../../bancoDeDados/conexao')

const detalharProduto = async (req, res) => {
    const { id } = req.params

    try {
        const produto = await knex.select('produtos.id', 'produtos.descricao', 'produtos.valor', 'produtos.quantidade_estoque', 'categorias.id as categoria_id', 'categorias.descricao as categoria_descricao')
            .from('produtos')
            .join('categorias', 'produtos.categoria_id', 'categorias.id')
            .where('produtos.id', id)
            .first()

        return res.status(200).json(produto)

    } catch (error) {
        return res.status(500).json({ mensagem: 'Erro interno do servidor.' })
    }
}

module.exports = detalharProduto