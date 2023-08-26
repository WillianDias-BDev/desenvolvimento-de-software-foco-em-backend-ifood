{
    const alturaEmCm = 185;

    if (alturaEmCm < 180) {
        console.log("REPROVADO");
    }
    else if (alturaEmCm >= 180 && alturaEmCm <= 185) {
        console.log("LÍBERO");
    }
    else if (alturaEmCm >= 186 && alturaEmCm <= 195) {
        console.log("PONTEIRO");
    }
    else if (alturaEmCm >= 196 && alturaEmCm <= 205) {
        console.log("OPOSTO");
    }
    else if (alturaEmCm > 205) {
        console.log("CENTRAL");
    }

}

//resolucao do educador 

{
    const alturaEmCm = 185;

    if (alturaEmCm < 180) {
        console.log('REPROVADO');
    } else if (alturaEmCm <= 185) {
        console.log('LÍBERO');
    } else if (alturaEmCm <= 195) {
        console.log('PONTEIRO');
    } else if (alturaEmCm <= 205) {
        console.log('OPOSTO');
    } else {
        console.log('CENTRAL');
    }

}