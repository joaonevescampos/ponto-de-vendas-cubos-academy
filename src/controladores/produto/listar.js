const knex = require('../../bancoDeDados/conexao')

const listarProduto = async (req, res) => {
    try {
        const lista = await knex.select('produtos.id', 'produtos.descricao', 'produtos.valor', 'produtos.quantidade_estoque', 'categorias.id as categoria_id', 'categorias.descricao as categoria_descricao')
            .from('produtos')
            .join('categorias', 'produtos.categoria_id', 'categorias.id')

        return res.status(200).json(lista)
    } catch (error) {
        return res.status(500).json({ mensagem: 'Erro interno do servidor.' })
    }
}

module.exports = listarProduto