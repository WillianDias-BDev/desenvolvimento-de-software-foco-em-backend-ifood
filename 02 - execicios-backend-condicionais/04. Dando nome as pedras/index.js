{
    const ladoA = 6;
    const ladoB = 6;
    const somaDeZero = ladoA + ladoB

    if (somaDeZero === 0) {
        console.log("Bucha de Branco.");
    }
    else if (ladoA && ladoB === 1) {
        console.log("Bucha de Ás.");
    }
    else if (ladoA && ladoB === 2) {
        console.log("Bucha de Duque.");
    }
    else if (ladoA && ladoB === 3) {
        console.log("Bucha de Terno.");
    }
    else if (ladoA && ladoB === 4) {
        console.log("Bucha de Quadra.");
    }
    else if (ladoA && ladoB === 5) {
        console.log("Bucha de Quina.");
    }
    else if (ladoA && ladoB === 6) {
        console.log("Bucha de Sena.");
    } else {
        console.log("Não é uma bucha.");
    }
}

//resolucao do educador
{
    const ladoA = 5;
    const ladoB = 5;

    if (ladoA === ladoB) {
        if (ladoA === 0) {
            console.log("bucha de branco");
        } else if (ladoA === 1) {
            console.log("bucha de Ás")
        } else if (ladoA === 2) {
            console.log("bucha de duque")
        } else if (ladoA === 3) {
            console.log("bucha de terno")
        } else if (ladoA === 4) {
            console.log("bucha de quadra")
        } else if (ladoA === 5) {
            console.log("bucha de quina")
        } else {
            console.log("bucha de duque")
        }
    } else {
        console.log("Não")
    }
}    