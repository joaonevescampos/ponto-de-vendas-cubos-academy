const knex = require('../../bancoDeDados/conexao')

const listarClientes = async (req, res) => {
    try {
        const clientes = await knex('clientes').orderBy('id', 'asc')

        return res.status(200).json(clientes)
        
    } catch (error) {
        return res.status(500).json({ mensagem: 'Erro interno do servidor.'})
    }
}

module.exports = listarClientes