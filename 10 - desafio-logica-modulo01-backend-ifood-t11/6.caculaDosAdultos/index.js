const lista = [22, 12, 14, 22, 18]


lista.sort((a, b) => {
    return a - b;
})
const menores = lista.every(idade => idade < 18)

for (const idade of lista) {

    if (idade >= 18) {
        console.log(idade)
        break
    }
    else if (menores) {
        console.log('CRESCA E APARECA')
        break
    }
}

