const knex = require('../../bancoDeDados/conexao')
const compiladorHtml = require('../../servicos/email/compiladorHtml')
const enviarEmail = require('../../servicos/email/enviarEmail')

const cadastrarPedido = async (req, res) => {
    const { cliente_id, observacao, pedido_produtos } = req.body

    try {
        let valorTotal = 0
        const pedidoProdutos = []
        const estoqueAtualizado = []

        const pedidosAgrupados = pedido_produtos.reduce((acumulo, objeto) => {
            const existeProdutoId = acumulo.find((id) => id.produto_id === objeto.produto_id)
        
            if (existeProdutoId) {
            existeProdutoId.quantidade_produto += objeto.quantidade_produto
            } else {
            acumulo.push({ ...objeto })
            }
            return acumulo
        }, [])

        for (let i = 0; i < pedidosAgrupados.length; i++){
            let produto = await knex('produtos')
                .where({ id: pedidosAgrupados[i].produto_id })
                .first()
            
            const quantidade = pedidosAgrupados[i].quantidade_produto

            const quantidadeEstoque = produto.quantidade_estoque
            
            if ( quantidade > quantidadeEstoque) {
                return res.status(400).json({
                    mensagem: `Estoque insuficiente para o produto de id = ${pedidosAgrupados[i].produto_id}. A quantidade em estoque é ${quantidadeEstoque} e a quantidade requerida é ${quantidade}. `
                })
            }

            const quantidadeAtual = quantidadeEstoque - quantidade

            estoqueAtualizado.push(quantidadeAtual)
            
            valorTotal += produto.valor * quantidade 
        }

        const pedido = await knex('pedidos').insert({
            cliente_id,
            observacao,
            valor_total: valorTotal
        }).returning('*')

        for (let i = 0; i < pedidosAgrupados.length; i++){
            let produto = await knex('produtos')
                .where({ id: pedidosAgrupados[i].produto_id })
                .first()

            const registro = await knex('pedido_produtos')
                .insert({
                pedido_id: pedido[0].id,
                produto_id: pedidosAgrupados[i].produto_id,
                quantidade_produto: pedidosAgrupados[i].quantidade_produto,
                valor_produto: produto.valor
            }).returning('*')

            await knex('produtos')
                .update({ quantidade_estoque: estoqueAtualizado[i]})
                .where({ id: pedidosAgrupados[i].produto_id })
            
            pedidoProdutos.push(registro[0])
        }

        const retorno = {
            pedido: pedido[0],
            pedido_produtos: pedidoProdutos
        }

        const { nome, email } = await knex('clientes').where({ id: cliente_id }).first()

        const produtosFormatados = pedidoProdutos.map(objeto => `
        ID do produto: ${objeto.produto_id}, 
        Quantidade: ${objeto.quantidade_produto}, 
        Preço: R$ ${objeto.valor_produto/100},00`).join('; ')

        const html = await compiladorHtml('./src/servicos/email/pedido.html', {
            nome,
            valorTotal: `R$ ${valorTotal/100},00`,
            produtos: produtosFormatados
        })

        enviarEmail({
            destinatario: { nome, email },
            assunto: `Novo pedido solicitado - Ponto de Vendas (JamjaScript)`,
            texto: html
        })
        
        return res.status(201).json(retorno)

    } catch (error) {
        return res.status(500).json({ mensagem: 'Erro interno do servidor.'})
    }
}

module.exports = cadastrarPedido