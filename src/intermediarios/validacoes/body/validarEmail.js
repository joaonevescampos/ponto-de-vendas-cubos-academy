const knex = require('../../../bancoDeDados/conexao')

const validarEmail = async (req, res, next) => {
    const { email } = req.body
    try {
        const emailExiste = await knex('usuarios').where({ email }).first()
       
        if (emailExiste) {
            return res.status(409).json({ mensagem: 'E-mail já existe no banco de dados.' })
        }
        next()
    } catch (error) {
        return res.status(500).json({ mensagem: 'Erro interno do Servidor' })
    }
}

module.exports = validarEmail