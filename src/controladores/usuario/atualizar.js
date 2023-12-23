const knex = require('../../bancoDeDados/conexao')
const bcrypt = require('bcrypt')

const atualizarUsuario = async (req, res) => {
    const { nome, email, senha } = req.body
    const { id } = req.usuario

    try {
        const senhaCriptografada = await bcrypt.hash(senha, 10)

        const novoUsuario = await knex('usuarios').where({ id }).update({
            nome,
            email,
            senha: senhaCriptografada
        }).returning(['id', 'nome', 'email'])

        return res.status(201).json(novoUsuario[0])

    } catch (error) {
        return res.status(500).json({mensagem: 'Erro interno do servidor.'});
    }
}

module.exports = atualizarUsuario
