{
    const usuarios = [
        {
            nome: "João",
            idade: 25,
        },
        {
            nome: "Ana",
            idade: 18,
        },
        {
            nome: "Beatriz",
            idade: 15,
        },
        {
            nome: "Carlos",
            idade: 16,
        },
        {
            nome: "Antonio",
            idade: 32,
        },
    ];

    const jovens = [];
    const adulto = [];

    for (const usuario of usuarios) {
        if (usuario.idade < 18) {
            jovens.unshift(usuario);
        } else {
            adulto.unshift(usuario);
        }
    }

    console.log(jovens);
    console.log(adulto);

}

//resolucao do educador

{
    const usuarios = [
        {
            nome: "João",
            idade: 25,
        },
        {
            nome: "Ana",
            idade: 18,
        },
        {
            nome: "Beatriz",
            idade: 15,
        },
        {
            nome: "Carlos",
            idade: 16,
        },
        {
            nome: "Antonio",
            idade: 32,
        },
    ];

    const jovens = [];
    let indiceJovens = 0;
    const adultos = [];
    let indiceAdultos = 0;

    for (const usuario of usuarios) {
        if (usuario.idade < 18) {
            jovens[indiceJovens] = usuario;
            indiceJovens++
        } else {
            adultos[indiceAdultos] = usuario;
            indiceAdultos++
        }
    }

    console.log(jovens, adultos)


}
