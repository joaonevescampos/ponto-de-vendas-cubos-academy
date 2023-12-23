const transportador = require('./conexao')

const enviarEmail = (dadosEmail) => {
    const { destinatario, assunto, texto } = dadosEmail
    transportador.sendMail({
        from: `${process.env.MAIL_NAME} <${process.env.MAIL_FROM}>`,
        to: `${destinatario.nome} <${destinatario.email}>`,
        subject: assunto,
        text: texto
    })
}

module.exports = enviarEmail