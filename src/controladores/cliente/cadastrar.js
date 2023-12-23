const knex = require('../../bancoDeDados/conexao')

const cadastrarCliente = async (req, res) => {
    try {
        const cliente = await knex('clientes').insert({
            nome: req.body.nome,
            email: req.body.email,
            cpf: req.body.cpf,
            cep: req.body.cep,
            rua: req.body.rua,
            numero: req.body.numero,
            bairro: req.body.bairro,
            cidade: req.body.cidade,
            estado: req.body.estado
        }).returning('*')
        
        return res.status(201).json(cliente[0])

    } catch (error) {
        return res.status(500).json({ mensagem: 'Erro interno do servidor.'})
    }
}

module.exports = cadastrarCliente