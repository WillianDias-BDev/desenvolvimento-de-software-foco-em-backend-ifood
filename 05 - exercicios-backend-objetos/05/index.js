{
    const curso = {
        id: 1234,
        nome: "Lógica de programação",
        aulas: [],
    }



    curso.aulas.unshift({
        identificador: 1,
        nome_da_aula: "Introdução a programação"
    },
        {
            identificador: 2,
            nome_da_aula: "Variáveis"
        },
        {
            identificador: 3,
            nome_da_aula: "Condicionais"
        },
        {
            identificador: 4,
            nome_da_aula: "Arrays"
        })

    console.log(curso)




    //adicionar item identificador
    //adicionar item aula

}

//resolucao do educador 

{
    const curso = {
        id: 1234,
        nome: "Lógica de programação",
        aulas: [
            {
                id: 1,
                nome: 'Introdução a programação'
            },
            {
                id: 2,
                nome: 'Variáveis'
            },
            {
                id: 3,
                nome: 'Condicionais'
            },
            {
                id: 4,
                nome: 'Arrays'
            }
        ],

    }
    console.log(curso);

}