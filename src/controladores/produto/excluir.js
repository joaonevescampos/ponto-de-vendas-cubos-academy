const knex = require('../../bancoDeDados/conexao')
const { excluirArquivo } = require('../../uploadsDeArquivos/storage')

const excluirProduto = async (req, res) => {
    const { id } = req.params

    try {
        const produto = await knex('produtos').where('id', id).first()

        if (produto.produto_imagem) {
            await excluirArquivo(produto.produto_imagem)
        }

        await knex('produtos').del().where('id', id)

        return res.status(204).json()

    } catch (error) {
        return res.status(500).json({ mensagem: 'Erro interno do servidor.' })
    }
}

module.exports = excluirProduto