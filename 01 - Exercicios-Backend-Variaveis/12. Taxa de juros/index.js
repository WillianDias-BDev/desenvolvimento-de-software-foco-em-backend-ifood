const m = 90000
const c = 60000
const n = 24
const i = Math.pow(m / c, 1 / n) - 1
const juros = i * 100

console.log(`O seu financiamento de ${c} reais teve uma taxa de juros de ${juros}%, pois após ${n} meses você teve que pagar 90000 reais.`)
//resolucao do professor

const m2 = 90000;
const c2 = 60000;
const tempo = 24;

const taxa = (m2 / c2) ** (1 / tempo) - 1;

console.log(`A taxa do financiamento foi ${taxa * 100}%`)