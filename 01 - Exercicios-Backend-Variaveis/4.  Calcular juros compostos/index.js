const c = 1000
const i = c * 12.5 / 100;
const t = (i + c) * 5;

console.log(t);

//resolução do professor
const capitalInicial = 1000;
const taxa = 12.5 / 100;
const tempo = 5;

const montante = capitalInicial * (1 + taxa) ** tempo
// const montante = capitalInicial * Math.pow(1+taxa), tempo);

console.log(montante)