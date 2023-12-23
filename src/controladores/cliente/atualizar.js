const knex = require('../../bancoDeDados/conexao')

const atualizarCliente = async (req, res) => {
    const { id } = req.params
    let { nome, email, cpf, cep, rua, numero, bairro, cidade, estado} = req.body
    
    try {
        const novoCliente = await knex('clientes').update({
            nome,
            email,
            cpf,
            cep: !cep ? cep = null : cep = cep,
            rua: !rua ? rua = null : rua = rua,
            numero: !numero ? numero = null : numero = numero,
            bairro: !bairro ? bairro = null : bairro = bairro,
            cidade: !cidade ? cidade = null : cidade = cidade,
            estado: !estado ? estado = null : estado = estado
        }).where({ id }).returning('*')

        return res.status(201).json(novoCliente[0])

    } catch (error) {
        return res.status(500).json({ mensagem: 'Erro interno do servidor.'})
    }
}

module.exports = atualizarCliente