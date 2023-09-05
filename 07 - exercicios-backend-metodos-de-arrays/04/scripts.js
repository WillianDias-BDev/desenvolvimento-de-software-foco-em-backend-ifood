const pacientes = ['José', 'Pedro', 'Maria', 'João', 'Ana', 'Bárbara', 'Joana'];



function filaDeAtendimento(pacientes, consulta, nome) {
    const agendar = 'agendar'
    const atender = 'atender'

    if (consulta === agendar) {
        const posicaoPacientes = pacientes.indexOf(nome)
        pacientes.splice(posicaoPacientes, 1)
        pacientes.push(nome)
        formatado = pacientes.join(', ')
        console.log(formatado)

    } else if (consulta === atender) {
        pacientes.shift()
        formatado = pacientes.join(', ')
        console.log(formatado);
    }



}

filaDeAtendimento(pacientes, 'atender')