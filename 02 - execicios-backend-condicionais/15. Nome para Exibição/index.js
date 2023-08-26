{

    const primeiroNome = "Mario";
    const sobrenome = "Bros";
    const apelido = "";

    if (primeiroNome && !sobrenome && !apelido) {
        console.log("Mario");
    }
    else if (primeiroNome && !sobrenome && apelido) {
        console.log("Bros");
    }
    else if (primeiroNome && sobrenome && !apelido) {
        console.log("Mario Bros");
    }
}

//resolucao do educador

{
    const primeiroNome = "Mario";
    const sobrenome = "Bros";
    const apelido = "";

    if (apelido) {
        console.log(apelido);
    } else if (sobrenome) {
        console.log(`${primeiroNome} ${sobrenome}`);
    } else {
        console.log(primeiroNome);
    }

}