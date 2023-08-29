const letra = "m"
const palavras = ["mamao", "maca", "melao", "melancia", "laranja"]

let contador = 0;

for (const palavra of palavras) {
    const primeiraLetra = palavra[0];
    if (primeiraLetra !== letra) {
        contador++;
    }
} console.log(contador);

