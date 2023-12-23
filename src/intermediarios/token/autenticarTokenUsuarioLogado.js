const jwt = require('jsonwebtoken')
const knex = require('../../bancoDeDados/conexao')

const autenticarTokenUsuarioLogado = async (req, res, next) => {
    const { authorization } = req.headers

    if (!authorization) {
        return res.status(401).json({ mensagem: 'Para acessar este recurso um token de autenticação válido deve ser enviado.' })
    }

    const token = authorization.split(' ')[1]

    try {
        const { id } = jwt.verify(token, process.env.SENHA_JWT)

        const usuarioLogado = await knex('usuarios').where('id', id).first()

        if (!usuarioLogado) {
            return res.status(404).json({ mensagem: 'Usuário não encontrado.' })
        }

        const { senha:_, ...usuario } = usuarioLogado

        req.usuario = usuario

        next()
    } catch (error) {
        return res.status(401).json({ mensagem: 'Não autorizado!' })
    }
}

module.exports = autenticarTokenUsuarioLogado