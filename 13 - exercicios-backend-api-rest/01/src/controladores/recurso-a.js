let { alunos } = require('../dados/colecao-a');
const { verificarSenha } = require('../intermediarios');

const listarAlunos = (req, res) => {
    verificarSenha(req, res);

    return res.status(200).json(alunos);
}

const exibirAluno = (req, res) => {
    verificarSenha(req, res);

    const { id } = req.params;

    const aluno = alunos.find(aluno => aluno.id === Number(id));

    return res.status(200).json(aluno);

}

const cadastrarAluno = (req, res) => {
    const { nome, sobrenome, idade, curso } = req.body;
    const campoObrigatorio = { nome, sobrenome, idade, curso };

    for (const campo in campoObrigatorio) {
        if (!campoObrigatorio[campo]) {
            return res.status(400).json({ mensagem: `O campo ${campo} é obrigatório` });
        }
    }

    if (idade < 18) {
        return res.status(400).json({ mensagem: 'Precisa ser maior de idade.' })
    }

    const novoAluno = {
        id: (alunos.length + 1).toString(),
        nome: nome,
        sobrenome: sobrenome,
        idade: idade,
        curso: curso
    }

    alunos.push(novoAluno);

    return res.status(201).send()
}

const excluirAluno = (req, res) => {
    verificarSenha(req, res);

    const { id } = req.params;

    const alunoCadastrado = alunos.find(aluno => aluno.id === Number(id));

    if (!alunoCadastrado) {
        return res.status(404).json({ mensagem: 'Cadastro não encontrado' })
    }

    alunos = alunos.filter(aluno => aluno.id !== Number(id));
    return res.status(200).send()
}

module.exports = {
    listarAlunos,
    exibirAluno,
    cadastrarAluno,
    excluirAluno
}