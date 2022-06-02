function retornaNumeroAleatorio() {
    return Math.floor(Math.random() * 100);
}

function divisivelPorDois() {
    return (retornaNumeroAleatorio() % 2 ) === 0
}

function somaDoisNumeros() {
    return retornaNumeroAleatorio() + retornaNumeroAleatorio();
}

describe("Aprendendo sobre Mocks", () => {
    
})