let { convidados } = require('../dados/bancodedados');

const listarConvidados = (req, res) => {
    return res.status(200).json(convidados);
}

const encontrarConvidado = (req, res) => {
    const nome = req.query.nome
    const convidado = convidados.find(convidado => convidado === nome);

    if (!convidado) {
        return res.status(404).json({ mensagem: 'O convidado buscado não está presente na lista.' })
    } else {
        return res.status(200).json({ mensagem: 'Convidado presente.' });
    }
}

const adicionarConvidado = (req, res) => {
    const { nome } = req.body;

    const presente = convidados.find(convidado => convidado === nome);

    if (presente) {
        return res.status(400).json({ mensagem: 'O nome do convidado a ser adicionado já existe na lista. Caso queria adicionar outro convidado de mesmo nome, favor fornecer o sobrenome também.' })
    } else {
        convidados.push(nome);
        return res.status(201).json({ mensagem: 'Convidado adicionado.' });
    }
}


const removerConvidado = (req, res) => {
    const nome = req.params.nome;

    const presente = convidados.find(convidado => convidado === nome);

    if (!presente) {
        return res.status(404).json({ mensagem: 'O nome do convidado a ser removido não existe na lista. Nenhum convidado foi removido.' })
    }

    convidados = convidados.filter(convidado => convidado !== nome);
    return res.status(204).json({ mensagem: 'Convidado removido' })


}


module.exports = {
    listarConvidados,
    encontrarConvidado,
    adicionarConvidado,
    removerConvidado
}