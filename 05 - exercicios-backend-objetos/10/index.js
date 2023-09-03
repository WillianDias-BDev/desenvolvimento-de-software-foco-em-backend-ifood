{
    // produtos
    const tv = { nome: "TV Samsung 4K", valorEmCentavos: 129900 }
    const notebook = { nome: "Notebook Dell", valorEmCentavos: 399990 }
    const mouse = { nome: "Mouse MX Master 3", valorEmCentavos: 23000 }
    const teclado = { nome: "Teclado Keychron K8", valorEmCentavos: 50000 }
    const caboUsb = { nome: "Cabo USB 2 Metros", valorEmCentavos: 1990 }
    const carregador = { nome: "Carregador portátil", valorEmCentavos: 4590 }
    const webcam = { nome: "Webcam C920s", valorEmCentavos: 80000 }
    const monitor = { nome: "Monitor LG 29 FHD", valorEmCentavos: 129900 }


    //lista de clientes

    const jose = { nome: "José", carrinho: [tv, caboUsb, caboUsb, webcam] }
    console.log(jose);

    const carlos = { nome: "Carlos", carrinho: [notebook, notebook] }
    console.log(carlos);

    const patricia = { nome: "Patricia", carrinho: [teclado, caboUsb, caboUsb, carregador, mouse, monitor] }
    console.log(patricia);

    const renato = { nome: "Renato", carrinho: [webcam, webcam, webcam, webcam] }
    console.log(renato);

    const roberto = { nome: "Roberto", carrinho: [webcam, caboUsb, caboUsb, monitor] }
    console.log(roberto);

}

//resolucao do educador

{

    // clientes
    const patricia = { nome: "Patricia", carrinho: [] }
    const carlos = { nome: "Carlos", carrinho: [] }
    const renato = { nome: "Renato", carrinho: [] }
    const jose = { nome: "José", carrinho: [] }
    const roberto = { nome: "Roberto", carrinho: [] }

    // produtos
    const tv = { nome: "TV Samsung 4K", valorEmCentavos: 129900 }
    const notebook = { nome: "Notebook Dell", valorEmCentavos: 399990 }
    const mouse = { nome: "Mouse MX Master 3", valorEmCentavos: 23000 }
    const teclado = { nome: "Teclado Keychron K8", valorEmCentavos: 50000 }
    const caboUsb = { nome: "Cabo USB 2 Metros", valorEmCentavos: 1990 }
    const carregador = { nome: "Carregador portátil", valorEmCentavos: 4590 }
    const webcam = { nome: "Webcam C920s", valorEmCentavos: 80000 }
    const monitor = { nome: "Monitor LG 29 FHD", valorEmCentavos: 129900 }

    jose.carrinho = [
        {
            item: tv,
            quantidade: 1

        },
        {
            item: caboUsb,
            quantidade: 2
        },
        {
            item: webcam,
            quantidade: 1
        }
    ]
    console.log(jose);

    carlos.carrinho = [
        {
            item: notebook,
            quantidade: 2
        }
    ]

    patricia.carrinho = [
        {
            item: teclado,
            quantidade: 1
        },
        {
            item: caboUsb,
            quantidade: 2
        },
        {
            item: carregador,
            quantidade: 1
        },
        {
            item: mouse,
            quantidade: 1
        },
        {
            item: monitor,
            quantidade: 1
        }
    ]

    renato.carrinho = [
        {
            item: webcam,
            quantidade: 5
        }
    ]

    roberto.carrinho = [
        {
            item: webcam,
            quantidade: 1
        },
        {
            item: caboUsb,
            quantidade: 2
        },
        {
            item: monitor,
            quantidade: 1
        }
    ]



}





