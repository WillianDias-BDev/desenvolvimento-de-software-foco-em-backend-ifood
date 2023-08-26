{
    const nota = 8.5;

    if (nota >= 9.0 && nota <= 10.0) {
        console.log("O estudando obteve conceito A");
    }
    else if (nota >= 8.0 && nota <= 8.9) {
        console.log("O estudando obteve conceito B");
    }
    else if (nota >= 6.0 && nota <= 7.9) {
        console.log("O estudando obteve conceito C");
    }
    else if (nota >= 4.0 && nota <= 5.9) {
        console.log("O estudando obteve conceito D");
    }
    else if (nota < 4.0) {
        console.log("O estudando obteve conceito E");
    }

}

//resolucao do educador

{

    const nota = 8.5;

    let conceito = '';

    if (nota < 4) {
        conceito = 'E';
    } else if (nota < 6) {
        conceito = 'D';
    } else if (nota < 8) {
        conceito = 'C';
    } else if (nota < 9) {
        conceito = 'B';
    } else {
        conceito = 'A';
    }
    console.log(`O estudando obteve o conceito ${conceito}`);
}