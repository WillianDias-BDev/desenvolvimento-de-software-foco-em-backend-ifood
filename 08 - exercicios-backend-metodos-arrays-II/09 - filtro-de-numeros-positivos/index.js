const numeros = [10, 987, -886, 0, 12, 199, -45, -67];

const numerosFiltrados = [];

for (const numero of numeros) {
    if (numero > 0) {
        numerosFiltrados.push(numero);
    }
}

console.log(numerosFiltrados);