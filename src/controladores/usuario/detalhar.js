const knex = require('../../bancoDeDados/conexao')

const detalharUsuario = async (req, res) => {
    const { id } = req.usuario
    try {
        const usuarioLogado = await knex('usuarios').where({ id }).first()

        const { senha: _, ...usuario } = usuarioLogado

        return res.status(200).json(usuario)

    } catch (error) {
        return res.status(500).json({ mensagem: 'Erro interno do servidor.' })
    }
}

module.exports = detalharUsuario