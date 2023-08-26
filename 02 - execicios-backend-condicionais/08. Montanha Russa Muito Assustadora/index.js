{
    const idade = 18;
    const possuiPatologia = false;
    const altura = 180;
    const ehEstudante = false;

    if (idade < 12 || possuiPatologia === true || altura < 150) {
        console.log("ACESSO NEGADO");
    }
    else if (ehEstudante === true || idade < 18) {
        console.log("10 reais");
    } else {
        console.log("20 reais");
    }

}

//resolucao do educador

{

    const idade = 18;
    const possuiPatologia = false;
    const altura = 180;
    const ehEstudante = false;

    if (idade < 12 || idade > 65 || possuiPatologia || altura < 150) {
        console.log("acesso negado");
    } else {
        if (idade < 18 || ehEstudante) {
            console.log("10 reais")
        } else {
            console.log("20 reais")
        }
    }


}
