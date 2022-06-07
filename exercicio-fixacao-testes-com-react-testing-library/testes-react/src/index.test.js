function retornaNumeroAleatorio() {
    return Math.floor(Math.random() * 100);
}

function divisivelPorDois() {
    return (retornaNumeroAleatorio() % 2 ) === 0
}

function somaDoisNumeros() {
    return retornaNumeroAleatorio() + retornaNumeroAleatorio();
}

describe("Aprendendo sobre Mocks jest.fn()", () => {
    // o jest.fn() simula apenas uma função por vez
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
  it("quantas vezes a função foi chamada e qual seu retorno", () => {
    divisivelPorDois = jest
      .fn()
     // .mockReturnValue('default value')
      .mockReturnValueOnce('first call')
      .mockReturnValueOnce('second call');
  
    expect(divisivelPorDois).toHaveBeenCalledTimes(0);
  
    expect(divisivelPorDois()).toBe("first call");
    expect(divisivelPorDois).toHaveBeenCalledTimes(1);
  
    expect(divisivelPorDois()).toBe("second call");
    expect(divisivelPorDois).toHaveBeenCalledTimes(2);
  
    // expect(divisivelPorDois()).toBe("default value");
    // expect(divisivelPorDois).toHaveBeenCalledTimes(3);
  });
})

describe("aprendendo sobre Mocks jest.mock()", () => {
    // o jest.mock mock todo um pacote de dependências ou modulos de uma única vez
})