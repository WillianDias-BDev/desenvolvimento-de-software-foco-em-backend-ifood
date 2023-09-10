const min = 25
const km = 11.5

const kmAdicional = km - 10
const minAdicional = min - 20

const kmTotal = km - kmAdicional
const minTotal = min - minAdicional

if (km <= 10 && min <= 20) {
    viagem = 50 * min + 70 * km
    console.log(viagem);
} else if (km > 10 && min <= 20) {
    viagem = 50 * min + 70 * kmTotal + kmAdicional * 50
    console.log(viagem);
} else if (km < 10 && min > 20) {
    viagem = 50 * minTotal + 70 * km + minAdicional * 30
    console.log(viagem);
} else if (km > 10 && min > 20) {
    viagem = 50 * minTotal + 70 * kmTotal + kmAdicional * 50 + minAdicional * 30

    console.log(viagem);
}

