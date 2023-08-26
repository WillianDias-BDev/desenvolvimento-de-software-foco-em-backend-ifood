{
    const tipoDePagamento = "dinheiro";

    const valorDoProduto = 13000;

    const descontoCredito = valorDoProduto * 0.05

    const valorAPagar = valorDoProduto - descontoCredito

    const descontoCheque = valorDoProduto * 0.03

    const valorAPagarCheque = valorDoProduto - descontoCheque

    const descontoDebDin = valorDoProduto * 0.1

    const valorAPagarDebDin = valorDoProduto - descontoDebDin

    if (tipoDePagamento === "credito") {
        console.log(`Valor a ser pago ${(valorAPagar / 100).toFixed(2)}`)
    }
    else if (tipoDePagamento === "cheque") {
        console.log(`Valor a ser pago ${(valorAPagarCheque / 100).toFixed(2)}`)
    }
    else if (tipoDePagamento === "debito" || tipoDePagamento === "dinheiro") {
        console.log(`Valor a ser pago ${(valorAPagarDebDin / 100).toFixed(2)}`)
    }

}

//resolucao do educador

{

    const tipoDePagamento = "dinheiro";

    const valorDoProduto = 13000;

    let valorComDesconto = 0;

    if (tipoDePagamento === 'credito') {
        valorComDesconto = valorDoProduto * 95 / 100;
    } else if (tipoDePagamento === 'cheque') {
        valorComDesconto = valorDoProduto * 97 / 100;
    } else {
        valorComDesconto = valorDoProduto * 90 / 100;
    }
    console.log(`Valor a ser pago: R$ ${(valorComDesconto / 100).toFixed(2)}`)
}