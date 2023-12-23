const knex = require('../../../bancoDeDados/conexao')

const validarCategoriaId = async (req, res, next) => {
    const { categoria_id } = req.body
    try {
        const existeCategoria = await knex('categorias').where('id', categoria_id).first()

        if (!existeCategoria) {
            return res.status(404).json({ mensagem: 'Categoria não encontrada.' })
        }
        next()
    } catch (error) {
        return res.status(500).json({ mensagem: 'Erro interno do servidor.' })
    }
}

module.exports = validarCategoriaId