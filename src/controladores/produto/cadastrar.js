const knex = require('../../bancoDeDados/conexao')
const { uploadFile } = require('../../uploadsDeArquivos/storage')

const cadastrarProduto = async (req, res) => {
    const { descricao, quantidade_estoque, valor, categoria_id } = req.body
    const { file } = req

    try {
        let produto
        if (file) {
            const produto_imagem = await uploadFile(
                `produtos/${file.originalname}`,
                file.buffer,
                file.mimetype
            )

            const { path } = produto_imagem

            produto = await knex('produtos').insert({
                descricao,
                quantidade_estoque,
                valor,
                categoria_id,
                produto_imagem: path
            }).returning('id')

        } else {
            produto = await knex('produtos').insert({
                descricao,
                quantidade_estoque,
                valor,
                categoria_id
            }).returning('id')
        }

        const produtoCadastrado = await knex.select('produtos.id', 'produtos.descricao', 'produtos.valor', 'produtos.quantidade_estoque', 'categorias.id as categoria_id', 'categorias.descricao as categoria_descricao', 'produtos.produto_imagem')
            .from('produtos')
            .join('categorias', 'produtos.categoria_id', 'categorias.id')
            .where('produtos.id', produto[0].id)
            .first()
        
        if (file) {
            produtoCadastrado.produto_imagem = process.env.BACKBLAZE_ENDPOINT + produtoCadastrado.produto_imagem 
        }

        return res.status(201).json(produtoCadastrado)

    } catch (error) {
        return res.status(500).json({ mensagem: 'Erro interno do servidor.' })
    }
}

module.exports = cadastrarProduto