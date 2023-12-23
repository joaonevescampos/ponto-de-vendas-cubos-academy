const knex = require('../../bancoDeDados/conexao')
const { uploadFile } = require('../../uploadsDeArquivos/storage')

const atualizarProduto = async (req, res) => {
    const { id } = req.params
    const { descricao, quantidade_estoque, valor, categoria_id } = req.body
    const { file } = req

    try {
        if (file) {
            const produto_imagem = await uploadFile(
                `produtos/${file.originalname}`,
                file.buffer,
                file.mimetype
            )

            const { path } = produto_imagem

            await knex('produtos').update({
                descricao,
                quantidade_estoque,
                valor,
                categoria_id,
                produto_imagem: path
            }).where({ id })

        } else {
            await knex('produtos').update({
                descricao,
                quantidade_estoque,
                valor,
                categoria_id,
                produto_imagem: null
            }).where({ id })
        }

        let produtoAtualizado = await knex.select('produtos.id', 'produtos.descricao', 'produtos.valor', 'produtos.quantidade_estoque', 'categorias.id as categoria_id', 'categorias.descricao as categoria_descricao', 'produtos.produto_imagem')
            .from('produtos')
            .join('categorias', 'produtos.categoria_id', 'categorias.id')
            .where('produtos.id', id)
            .first()
        
        if (file) {
            produtoAtualizado.produto_imagem = process.env.BACKBLAZE_ENDPOINT + produtoAtualizado.produto_imagem
        }

        return res.status(201).json(produtoAtualizado)

    } catch (error) {
        return res.status(500).json({ mensagem: 'Erro interno do servidor.' })
    }
}

module.exports = atualizarProduto