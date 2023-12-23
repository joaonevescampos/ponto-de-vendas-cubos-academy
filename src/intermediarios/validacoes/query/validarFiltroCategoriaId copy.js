const knex = require('../../../bancoDeDados/conexao')

const validarFiltroCategoriaId = async (req, res, next) => {
    const { categoria_id } = req.query

    try {
        if (categoria_id) {
            const lista = await knex.select('produtos.id', 'produtos.descricao', 'produtos.valor', 'produtos.quantidade_estoque', 'categorias.id as categoria_id', 'categorias.descricao as categoria_descricao')
            .from('produtos')
            .join('categorias', 'produtos.categoria_id', 'categorias.id')
            .where('categoria_id', categoria_id)

            if (lista.length === 0) {
                return res.status(400).json({ mensagem: 'Não há produtos com esse id' })
            }
            return res.status(200).json(lista)
        }
        next()

    } catch (error) {
        return res.status(500).json({ mensagem: 'Erro interno do servidor.' })
    }
}

module.exports = validarFiltroCategoriaId