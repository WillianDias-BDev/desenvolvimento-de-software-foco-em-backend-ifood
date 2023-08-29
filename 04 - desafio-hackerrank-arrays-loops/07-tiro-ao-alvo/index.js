const disparos = [0, 10, 50, 70, 80, 30];

let setentaMais = 0;

for (const disparo of disparos) {
    if (disparo > 70) {
        setentaMais++
    }
}
if (setentaMais >= 3) {
    console.log(setentaMais)
} else {
    console.log('ELIMINADO');
}
