const aws = require('aws-sdk')

const endpoint = new aws.Endpoint(process.env.ENDPOINT_S3)

const s3 = new aws.S3({
    endpoint,
    credentials: {
        accessKeyId: process.env.KEY_ID,
        secretAccessKey: process.env.APP_KEY
    }
})

const uploadFile = async (path, buffer, mimetype) => {
    const produto_imagem = await s3.upload({
        Bucket: process.env.BACKBLAZE_BUCKET,
        Key: path,
        Body: buffer,
        ContentType: mimetype
    }).promise()

    return {
        url: produto_imagem.Location,
        path: produto_imagem.Key
    }
}

const excluirArquivo = async (path) => {
    await s3.deleteObject({
        Bucket: process.env.BACKBLAZE_BUCKET,
        Key: path
    }).promise()
}

module.exports = {
    uploadFile,
    excluirArquivo
}