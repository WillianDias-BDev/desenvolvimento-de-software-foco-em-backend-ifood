const stringCorrompida = ["*Canis %lupus )familiaris"]

let dadoPuruficado = '';
for (let caractere of stringCorrompida) {
    if (caractere === '!' || caractere === '@' || caractere === '#' || caractere === '$' || caractere === '%' || caractere === '&' || caractere === '*' || caractere === '(' || caractere === ')') {

    } else {
        dadoPuruficado = dadoPuruficado + caractere;
    }


}
console.log(dadoPuruficado);