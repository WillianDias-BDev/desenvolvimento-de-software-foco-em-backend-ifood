let { livros } = require('../dados/bancodedados');

const listarLivros = (req, res) => {
    return res.status(200).json(livros);
}

const encontrarLivro = (req, res) => {
    const { id } = req.params;
    const verificar = parseInt(id);

    const encontrado = livros.find(livro => livro.id === Number(id));

    if (isNaN(verificar)) {
        return res.status(400).json({ mensagem: 'O valor do parâmetro ID da URL não é um número válido.' })
    }

    if (!encontrado) {
        return res.status(400).json({ mensagem: 'Não existe livro para o ID informado.' })
    }

    return res.status(200).json(encontrado)

}

const adicionarLivro = (req, res) => {
    const { titulo, autor, ano, numPaginas } = req.body

    const livro = {
        id: livros.length + 1,
        titulo,
        autor,
        ano,
        numPaginas
    }

    livros.push(livro);

    return res.status(201).json(livro);
}

const substituirLivro = (req, res) => {
    const { id } = req.params;
    const { titulo, autor, ano, numPaginas } = req.body

    const encontrado = livros.find(livro => livro.id === Number(id));

    if (!encontrado) {
        return res.status(404).json({ mensagem: 'Não existe livro a ser substituído para o ID informado.' })
    }

    encontrado.titulo = titulo;
    encontrado.autor = autor;
    encontrado.ano = Number(ano);
    encontrado.numPaginas = numPaginas;

    return res.status(200).json({ mensagem: 'Livro substituído.' })
}

const alterarLivro = (req, res) => {
    const { id } = req.params;
    const { titulo, autor, ano, numPaginas } = req.body;

    const encontrado = livros.find(livro => livro.id === Number(id));

    if (!encontrado) {
        return res.status(404).json({ mensagem: 'Não existe livro a ser alterado para o ID informado.' })
    }

    if (titulo) {
        encontrado.titulo = titulo;
    }

    if (autor) {
        encontrado.autor = autor;
    }

    if (ano) {
        encontrado.ano = ano;
    }

    if (numPaginas) {
        encontrado.numPaginas = numPaginas;
    }

    return res.status(200).json({ mensagem: 'Livro alterado.' })
}

const excluirLivro = (req, res) => {
    const { id } = req.params;

    const encontrado = livros.find(livro => livro.id === Number(id));

    if (!encontrado) {
        return res.status(404).json({ mensagem: 'Não existe livro a ser removido para o ID informado.' })
    }

    livros = livros.filter((livro) => {
        return livro.id !== Number(id);
    })

    return res.status(200).json({ mensagem: 'Livro removido.' })
}



module.exports = {
    listarLivros,
    encontrarLivro,
    adicionarLivro,
    substituirLivro,
    alterarLivro,
    excluirLivro
}