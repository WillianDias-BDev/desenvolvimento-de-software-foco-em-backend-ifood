const imoveis = require('../banco-de-dados');


const listarImoveis = (req, res) => {
    return res.status(200).json(imoveis);

}

const obterImovel = (req, res) => {
    const { id } = req.params;

    const imovel = imoveis.find((imovel) => {
        return imovel.id === Number(id);
    })

    if (!imovel) {
        return res.status(404).json({ mensagem: 'imóvel não encontrado' })
    }

    return res.status(200).json(imovel);
}

module.exports = {
    listarImoveis,
    obterImovel
}