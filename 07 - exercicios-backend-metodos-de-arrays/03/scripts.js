const nomes = ['Ford Ká', 'Ranger', 'Hilux', 'Corola', 'Fusca', 'Chevete', 'Brasilia'];
const posicao = 3;


function carros(nomes, numero) {
    numero = numero
    numero = nomes.slice(numero, numero + 3);
    console.log(numero)
}




carros(nomes, 3) 