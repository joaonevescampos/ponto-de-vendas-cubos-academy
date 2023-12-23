const knex = require('../../bancoDeDados/conexao.js')
const jwt = require('jsonwebtoken')

const logarUsuario = async (req, res) => {
    const { email } = req.body

    try {
        const usuario = await knex('usuarios').where('email', email).first()

        const token = jwt.sign({ id: usuario.id }, process.env.SENHA_JWT, { expiresIn: '8h' })

        const { senha: _, ...usuarioLogado } = usuario

        return res.status(200).json({ usuario: usuarioLogado, token })
    } catch (error) {
        return res.status(500).json({ mensagem: 'Erro interno do servidor.' })
    }
}

module.exports = logarUsuario