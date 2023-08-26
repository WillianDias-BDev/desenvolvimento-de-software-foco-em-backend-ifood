{
    const jogada1 = "papel"
    const jogada2 = "papel"


    if (jogada1 == "pedra" && jogada2 == "tesoura") {
        console.log("pedra");
    }
    else if (jogada1 == "tesoura" && jogada2 == "pedra") {
        console.log("pedra");
    }
    else if (jogada1 == "pedra" && jogada2 == "papel") {
        console.log("papel");
    }
    else if (jogada1 == "papel" && jogada2 == "pedra") {
        console.log("papel");
    }
    else if (jogada1 == "papel" && jogada2 == "tesoura") {
        console.log("tesoura");
    }
    else if (jogada1 == "tesoura" && jogada2 == "papel") {
        console.log("tesoura");
    } else {
        console.log("empate");
    }
}


//resoluçao do educador
{
    const jogada1 = "tesoura"
    const jogada2 = "papel"

    if (jogada1 === jogada2) {
        console.log("empate")
    } else {
        if (jogada1 === "pedra") {
            if (jogada2 === "tesoura") {
                console.log("pedra ganhou")
            } else {
                console.log("papel ganhou")
            }
        } else if (jogada1 === "tesoura") {
            if (jogada2 === "pedra") {
                console.log("pedra ganhou")
            } else {
                console.log("tesoura ganhou")
            }
        } else {
            if (jogada2 === "pedra") {
                console.log("papel ganhou")
            } else {
                console.log("tesoura ganhou")
            }
        }
    }


}