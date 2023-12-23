const knex = require('../../bancoDeDados/conexao')

const listarPedidos = async (req, res) => {
    const { cliente_id } = req.query

    try {
        let todosPedidos = []

        if (cliente_id) {
            const cliente = await knex('clientes').where('id', '=', cliente_id).first()
            if (!cliente)
                return res.status(404).json({ mensagem: 'Não há cliente com esse id' })
        }

        if (cliente_id) {
            todosPedidos = await knex('pedidos').where('cliente_id', '=', cliente_id)

        } else {
            todosPedidos = await knex('pedidos')
        }

        let todosPedidoProdutos = []
        
        for (const pedido of todosPedidos) {
            let pedidoProduto = await knex('pedido_produtos').where('pedido_id', '=', pedido.id)
            todosPedidoProdutos.push({ pedido, pedidoProduto })
        }
        if (todosPedidoProdutos.length === 0) {
            return res.status(404).json({ mensagem: 'Pedido não existe' })

        }

        return res.status(200).json(todosPedidoProdutos)

    } catch (error) {
        return res.status(500).json({ mensagem: 'Erro interno do servidor.' })
    }
}

module.exports = listarPedidos