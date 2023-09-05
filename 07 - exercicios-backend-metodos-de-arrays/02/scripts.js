const nomes = ['Juninho', 'Vidal', 'Guido', 'Dani', 'Ruli', 'Diego'];
const tamanhoDoGrupo = 4;


function doisGrupos(nomes, numero) {
    //dividir a quantidade de nomes de acordo com o tamanho do grupo
    numero = numero
    grupo1 = nomes.slice(0, numero)
    console.log(grupo1);
    grupo2 = nomes.slice(numero, nomes.length)
    console.log(grupo2);
}

doisGrupos(nomes, 4)