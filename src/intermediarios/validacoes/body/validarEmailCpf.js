const knex = require('../../../bancoDeDados/conexao')

const validarEmailCpf = async (req, res, next) => {
    try {
        const campos = [{ email: req.body.email }, { cpf: req.body.cpf }]

        for (let i = 0; i < campos.length; i++) {
            const existeCampo = await knex('clientes').where(campos[i]).first()

            if (existeCampo) {
                return res.status(409).json({
                    mensagem: `O ${Object.keys(campos[i])[0]} já existe no banco de dados.`
                })
            }
        }
        next()

    } catch (error) {
        return res.status(500).json({ mensagem: 'Erro interno do servidor.'})
    }
}

module.exports = validarEmailCpf 