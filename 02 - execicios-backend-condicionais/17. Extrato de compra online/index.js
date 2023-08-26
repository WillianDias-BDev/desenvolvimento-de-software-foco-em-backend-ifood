{
    const valorDoProduto = 100000;

    const quantidadeDoParcelamento = 10;

    const valorPago = 300;

    const valor = valorDoProduto / 100;
    const cadaParcela = valor / quantidadeDoParcelamento;
    const parcelasRestantes = Math.floor((valor - valorPago) / cadaParcela);


    console.log(`Restam ${parcelasRestantes} parcelas de R$${cadaParcela.toFixed(2)}.`);

}

//resolucao do educador

{

    const valorDoProduto = 100000;

    const quantidadeDoParcelamento = 10;

    const valorPago = 300;

    const valorParcelaEmReais = (valorDoProduto / quantidadeDoParcelamento) / 100
    const parcelasPagas = valorPago / valorParcelaEmReais;

    console.log(`Restam ${quantidadeDoParcelamento - parcelasPagas} parcelas de R$${valorParcelaEmReais.toFixed(2)}`)

}