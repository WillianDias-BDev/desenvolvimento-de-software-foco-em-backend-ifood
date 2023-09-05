const pacientes = ['José', 'Pedro', 'Maria', 'João', 'Ana', 'Bárbara', 'Joana'];

function agendarPaciente(nome) {
    const posicaoPacientes = pacientes.indexOf(nome)
    pacientes.splice(posicaoPacientes, 1)
    pacientes.push(nome)
    formatado = pacientes.join(', ')
    console.log(formatado);


}

function atenderPaciente(nome) {
    const posicaoPacientes = pacientes.indexOf(nome)
    pacientes.splice(posicaoPacientes, 1)
    formatado = pacientes.join(', ')
    console.log(formatado);
}

function cancelarAtendimento(nome) {
    const posicaoPacientes = pacientes.indexOf(nome)
    pacientes.splice(posicaoPacientes, 1)
    formatado = pacientes.join(', ')
    console.log(formatado);
}



agendarPaciente()
atenderPaciente('José')
cancelarAtendimento('Ana')