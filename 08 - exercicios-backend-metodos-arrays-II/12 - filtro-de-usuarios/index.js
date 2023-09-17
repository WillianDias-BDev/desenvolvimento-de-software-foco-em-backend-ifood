const pessoas = [
    {
        nome: "Antonio",
        idade: 30,
        profissao: "Jornalista",
    },
    {
        nome: "Maria",
        idade: 30,
        profissao: "Jornalista",
    },
    {
        nome: "Ana",
        idade: 21,
        profissao: "Programador",
    },
    {
        nome: "Beatriz",
        idade: 20,
        profissao: "Programador",
    },
    {
        nome: "José",
        idade: 32,
        profissao: "Jornalista",
    },
    {
        nome: "Marcos",
        idade: 30,
        profissao: "Programador",
    },
];

const programadorMai20 = pessoas.filter(pessoa => pessoa.idade > 20 && pessoa.profissao === 'Programador')
const jornalistaMai30 = pessoas.filter(pessoa => pessoa.idade > 30 && pessoa.profissao === 'Jornalista')
const outrosJovens = pessoas.filter(pessoa => pessoa.idade < 30)

console.log(outrosJovens)