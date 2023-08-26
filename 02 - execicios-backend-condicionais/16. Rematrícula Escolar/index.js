{
    const idadeDoAluno = 18;

    const possuiResponsavel = false;

    if (idadeDoAluno >= 18) {
        console.log("Rematrícula realizada com sucesso!");
    } else if (idadeDoAluno < 18 && possuiResponsavel === true) {
        console.log("Rematrícula realizada com sucesso!");
    } else {
        console.log("Não é possível fazer a rematrícula");
    }
}

//resolucao do educador

{

    const idadeDoAluno = 18;

    const possuiResponsavel = false;

    if (idadeDoAluno >= 18 || possuiResponsavel) {
        console.log('Rematricula realizada com sucesso');
    } else {
        console.log('Não é possível fazer a rematricula');
    }


}