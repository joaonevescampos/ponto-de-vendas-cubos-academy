const knex = require('../../../bancoDeDados/conexao')
const bcrypt = require('bcrypt')

const validarEmailSenha = async (req, res, next) => {
    const { email, senha } = req.body

    try {
        const usuario = await knex('usuarios').where('email', email).first()

        if (!usuario) {
            return res.status(400).json({ mensagem: 'Email ou senha inválido.' })
        }

        const senhaValida = await bcrypt.compare(senha, usuario.senha)

        if (!senhaValida) {
            return res.status(400).json({ mensagem: 'Email ou senha inválido.' })
        }
        next()
    } catch (error) {
        return res.status(500).json({ mensagem: 'Erro interno do servidor.' })
    }
}

module.exports = validarEmailSenha