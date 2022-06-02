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
  it("testa se a função foi chamada", () => {
      somaDoisNumeros = jest.fn();
      somaDoisNumeros();
      expect(somaDoisNumeros).toHaveBeenCalled();
  })

  it("testa o resultado da função", () => {
    somaDoisNumeros = jest.fn().mockReturnValue(8);
    
    expect(somaDoisNumeros()).toBe(8);
  })

  it("testa quantas vezes a função foi chamada", () => {
      somaDoisNumeros = jest.fn();

      somaDoisNumeros();
      somaDoisNumeros();
      somaDoisNumeros();

      expect(somaDoisNumeros).toHaveBeenCalledTimes(3);
  })

  it("testa se retorna true quando o número é par", () => {
      retornaNumeroAleatorio = jest.fn().mockReturnValue(2);

      expect(divisivelPorDois()).toBe(true);
  })

  it("Testa se o retorno é falso quando o número é impar", () => {
    retornaNumeroAleatorio = jest.fn().mockReturnValue(3);

    expect(divisivelPorDois()).toBe(false);
  })
})