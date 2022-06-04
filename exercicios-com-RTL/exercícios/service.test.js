const services = require('./service')

test('testa  a função que gera números aleatórios é chamada', () => {
    // a propriedade toHaveBeenCalled é exclusiva para funções simuladas (jest.fn())
    const getFunction = services.randomNumber = jest.fn()
    services.randomNumber();
    expect(getFunction).toHaveBeenCalled
})

test('testa se a função aleatória retorna o valor definido', () => {
    services.randomNumber = jest.fn().mockReturnValue(10)
    expect (services.randomNumber()).toBe(10);
})

test('testa o mockimplementation', () => {
    // https://jestjs.io/pt-BR/docs/mock-function-api#mockfnmockimplementationfn
  // When the mocked function runs out of implementations defined with 
  // .mockImplementationOnce(),it will execute the default implementation
  //  set with jest.fn(() => defaultValue) or 
  // .mockImplementation(() => defaultValue) if they were called:

  // const mockFn = jest
  //   .fn(() => 'default')
  //   .mockImplementationOnce(() => 'first call')
  //   .mockImplementationOnce(() => 'second call');

  // mockFn(); // 'first call'
  // mockFn(); // 'second call'
  // mockFn(); // 'default'

     services.randomNumber = jest.fn().mockImplementation( () => 55 ) // no caso o default Value não foi usado
     services.randomNumber();
     services.randomNumber();
     expect(services.randomNumber).toHaveBeenCalledTimes(2); // apenas é testadas as chamadas

})

test ('segundo teste com a mockImplementation', () => {
    services.randomNumber = jest.fn()
    .mockImplementation( () => 3 ) // esse número é o default Value
    .mockReturnValueOnce(22) // vai ser exercutado primeiro
    .mockReturnValueOnce(15);

    expect(services.randomNumber()).toBe(22); // primeira execução
    expect(services.randomNumber()).toBe(15); // segunda execução
    expect(services.randomNumber()).toBe(3);  // demais execuções e opcional
})

test('criando uma nova implementação que recebe dois parâmetros e retorna a divisão deles', () => {
    services.randomNumber = jest.fn().mockImplementationOnce((a, b) => a / b);

    expect(services.randomNumber(50, 2)).toBe(25);
    expect(services.randomNumber).toHaveBeenCalledTimes(1);
    expect(services.randomNumber).toHaveBeenCalledWith( 50, 2 );

})

test('testa uma implementação que recebe 3 parâmetros e retorna a multiplicação destes', () => {
 services.randomNumber = jest.fn()
 .mockImplementation((a, b, c ) => a * b * c )

 expect(services.randomNumber(10, 2, 3)).toBe(60);
 expect(services.randomNumber( 2, 3, 5)).toBe(30);
 expect(services.randomNumber).toHaveBeenCalledTimes(2)
 expect(services.randomNumber).toHaveBeenCalledWith( 2, 3, 5 )
 expect(services.randomNumber).toHaveBeenCalledWith( 10, 2, 3, )
}) 

test (' mock reset', () => {
    //mockFn.mockClear()
    //Clears all information stored in the mockFn.mock.calls, mockFn.mock.instances, 
    // mockFn.mock.contexts and mockFn.mock.results arrays. 
    // Often this is useful when you want to clean up a mocks usage data between two assertions.
    // mockFn.mockReset()
    //Does everything that mockFn.mockClear() does, 
    // and also removes any mocked return values or implementations.
    
    services.randomNumber.mockClear(); // no caso ambos funcionam
    expect(services.randomNumber).toHaveBeenCalledTimes(0);

    services.randomNumber.mockImplementation(a => a * 2);

    expect(services.randomNumber(5)).toBe(10);
    expect(services.randomNumber).toHaveBeenCalledTimes(1);
})