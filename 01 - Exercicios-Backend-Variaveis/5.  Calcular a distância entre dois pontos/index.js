// const x1 = 1
// const x2 = 1
// const y1 = 1
// const y2 = 4

// const d = (x1 - x2) + (y1 - y2) ** 2
// const resultado = Math.sqrt(d)

// console.log(`A distância entre esses 2 pontos é de ${resultado}`)

//resoluçao do professor
const x1 = 1, x2 = 1, y1 = 1, y2 = 4;

const d = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

console.log(`A distância é de ${d}.`);