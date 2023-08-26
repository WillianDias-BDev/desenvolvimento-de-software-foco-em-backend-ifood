{
    const aposentada = false;
    const portadoraDeDoenca = false;
    const totalDeRendimentos = 3000000;


    if (aposentada === true) {
        console.log("ISENTA");
    }
    else if (portadoraDeDoenca === true) {
        console.log("ISENTA");
    }
    else if (totalDeRendimentos <= 2755970) {
        console.log("VAZA LEAO! JA TA DIFICIL SEM VOCE")
    } else {
        console.log("PEGA LEAO");
    }

}

//resolucao do educador
{
    const aposentada = false;
    const portadoraDeDoenca = false;
    const totalDeRendimentos = 3000000;

    if (aposentada || portadoraDeDoenca) {
        console.log("isenta");
    } else if (totalDeRendimentos < 2855970) {
        console.log("vaza leão! já está dificil sem você");
    } else {
        console.log("pega leão")
    }



}
