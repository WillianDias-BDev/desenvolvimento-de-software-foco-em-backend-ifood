function processData(input) {
    //Enter your code here
    const linhas = input.trim().split('\n');
    const n = parseInt(linhas[0], 10);



    const coordenadas = [];
    for (let i = 1; i < linhas.length; i++) {
        const coord = linhas[i].split(' ').map(parseFloat);

        const x = coord[0]
        const y = coord[1]
        coordenadas.push([x, y])

    }

    function distanciaEuclidiana(ponto1, ponto2) {
        const [x1, y1] = ponto1;
        const [x2, y2] = ponto2;
        const distancia = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))
        return distancia
    }

    let maiorDistancia = 0

    for (let i = 1; i < n; i++) {
        for (let j = 1 + 1; j < n; j++) {
            const dist = distanciaEuclidiana(coordenadas[i], coordenadas[j]);
            maiorDistancia = Math.max(maiorDistancia, dist);
        }
    }


    console.log(maiorDistancia)
} 