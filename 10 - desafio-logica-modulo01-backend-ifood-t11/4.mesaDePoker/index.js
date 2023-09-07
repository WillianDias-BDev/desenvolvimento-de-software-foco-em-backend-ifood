const valores = [0, 5, 6, 10, 11]
const min = 2
const max = 10

const filtro = []

for (const valor of valores) {
    if (valor >= min && valor <= max) {
        filtro.push(valor)
    }
}
console.log(filtro)
