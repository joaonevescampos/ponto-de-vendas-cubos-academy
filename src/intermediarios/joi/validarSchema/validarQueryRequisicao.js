const validarQueryRequisicao = joiSchema => async (req, res, next) => {
    try {
        await joiSchema.validateAsync(req.query)

        next()
    } catch (error) {
        return res.status(400).json({ mensagem: error.message })
    }
}

module.exports = validarQueryRequisicao