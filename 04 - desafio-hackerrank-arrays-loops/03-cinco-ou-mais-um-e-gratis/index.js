const precos = [100, 500, 100, 200, 50];

let soma = 0;
let menor = precos[0];
for (let itemAtual of precos) {
    soma += itemAtual;

    //se o item atual for menor que o menor ateh agora
    if (itemAtual < menor) {
        //o item atual eh o novo menor
        menor = itemAtual;
    }
}
if (precos.length >= 5) {
    //tem promo
    for (let itemAtual of precos) {

    }
    console.log(soma - menor);
} else {
    //nao tem promo
    console.log(soma);

}