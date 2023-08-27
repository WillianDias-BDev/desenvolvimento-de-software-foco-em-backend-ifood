const disjuntores = [false, false, true, false, false, true, false, false];





//verificar cada item, caso seja true imprimir o numero do indice

for (let i = 0; i < disjuntores.length; i++) {
    if (disjuntores[i]) {
        console.log(i)
    }
}
