{
    const quantidadeDeAguaIngerida = 2;

    if (quantidadeDeAguaIngerida < 1.5) {
        console.log("Risco Alto - Você está ingerindo pouquissima água, beba mais água!")
    }
    else if (quantidadeDeAguaIngerida >= 1.5 && quantidadeDeAguaIngerida <= 3.0) {
        console.log("Risco Moderado - Você está ingerindo pouca água, beba mais!")
    }
    else if (quantidadeDeAguaIngerida > 3.0) {
        console.log("Risco Baixo - Você está ingerindo uma boa quantidade de água, parabéns!")
    }
}

//resolucao do educador

{

    const quantidadeDeAguaIngerida = 1.2;

    if (quantidadeDeAguaIngerida < 1.5) {
        console.log('Risco Alto - Você está ingerindo pouquissima água, beba mais água!');
    } else if (quantidadeDeAguaIngerida <= 3) {
        console.log('Risco Moderado - Você está ingerindo pouca água, beba mais!')
    } else {
        console.log('Risco Baixo - Você está ingerindo uma boa quantidade de água, parabéns!')
    }



}
