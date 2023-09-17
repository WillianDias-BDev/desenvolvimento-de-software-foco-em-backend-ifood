const endereços = [
    { cep: 0o111222, rua: "Rua dos Artistas" },
    { cep: 0o111333, rua: "Rua Augusta" },
    { cep: 0o222444, rua: "Avenida Paralela" },
    { cep: 11222333, rua: "Rua Carlos Gomes" },
];

function filtroCep(cep) {
    const resultado = endereços.find((endereco) => {
        return endereco.cep === cep

    })
    console.log(resultado);
}


filtroCep(0o222444);

