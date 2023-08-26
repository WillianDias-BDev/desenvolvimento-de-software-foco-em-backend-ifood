{
    const rendaMensalEmCentavos = 150000;

    const mesesDecorridos = 12;

    const totalJaPagoPeloAluno = 1000000;

    const valorDaParcela = rendaMensalEmCentavos * 0.18

    if (mesesDecorridos > 60) {
        console.log("Tempo decorrido de contrato. O aluno não deve mais nada.")
    }
    else if (totalJaPagoPeloAluno === 1800000) {
        console.log("Soma das parcelas já pagas pelo aluno, a divida de 18 mil reais foi quitada.")
    }
    else if (rendaMensalEmCentavos >= 200000 && totalJaPagoPeloAluno < 1800000) {
        console.log(`O valor da parcela desse mês é R$ ${(valorDaParcela / 100).toFixed(2)} reais.`)
    }
    else if (rendaMensalEmCentavos < 200000) {
        console.log("O valor da parcela desse mês é R$ 0 reais. Nenhum valor é devido pois a renda do estudante está abaixo do valor mínimo de R$ 2000 reais.")
    }
}

//resolucao do educador

{

    const rendaMensalEmCentavos = 350000;

    const mesesDecorridos = 12;

    const totalJaPagoPeloAluno = 1000000;

    if (mesesDecorridos > 60) {
        console.log('Você não deve mais nada para a Cubos');
    } else if (totalJaPagoPeloAluno >= 1800000) {
        console.log('Você ja quitou todas as parcelas')
    } else if (rendaMensalEmCentavos < 200000) {
        console.log('O valor da parcela desse mês é R$ 0 reais. Nenhum valor é devido pois a renda do estudante está abaixo do valor mínimo de R$ 2000 reais.')
    } else {
        const valorParcela = (rendaMensalEmCentavos / 100) * 18 / 100;
        console.log(`Ò valor da parcela desse mês é R$ ${valorParcela} reais`)
    }


}