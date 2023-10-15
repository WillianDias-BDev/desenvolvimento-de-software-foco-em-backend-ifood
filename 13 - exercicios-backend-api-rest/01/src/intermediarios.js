function verificarSenha(req, res, next) {
    const senha = req.query.senha;

    if (senha === 'cubos123') {
        return res.status(200)
    } else if (senha !== 'cubos123') {
        return res.status(401).json({ mensagem: 'A senha informada é inválida!' })
    }



    next();
}


module.exports = {
    verificarSenha
}