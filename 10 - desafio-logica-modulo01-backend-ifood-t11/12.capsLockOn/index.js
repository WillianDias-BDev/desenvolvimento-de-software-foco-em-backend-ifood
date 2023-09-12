
const input = 'cAPs'


function filtro() {
    const demais = input.substring(1)
    const primeira = input[0]

    if ((primeira === primeira.toLowerCase()) && (demais === demais.toUpperCase())) {
        console.log(primeira.toUpperCase() + demais.toLowerCase())
    } else if (input === input.toUpperCase()) {
        console.log(input.toLowerCase())
    } else {
        console.log(input)
    }


}

filtro()