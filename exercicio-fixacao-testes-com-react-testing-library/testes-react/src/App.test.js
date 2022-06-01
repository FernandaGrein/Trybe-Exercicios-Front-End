import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

describe("Tela de inserção de email", () => {
  it("Verifica se existe um input de email na tela", () => {
    // acessar os elementos da tela 
    render(<App />);
    const inputEmail = screen.getByLabelText("Email");
  
    // fazer os testes
    expect(inputEmail).toBeInTheDocument();
    expect(inputEmail.type).toBe("email");
  });
  
  it("Verifica se existe dois botões na tela", () => {
    // acessar os elementos da tela
    render(<App />);
    const buttons = screen.getAllByRole("button");
   
    // fazer os testes 
    expect(buttons).toHaveLength(2);
  
  });
  
  it("Verifica se existe o botão de 'Enviar'", () => {
    // acessar os elementos da tela 
    render(<App />)
    const button = screen.getByTestId("id-send")
  
    // fazer os testes
    expect(button).toBeInTheDocument();
    expect(button).toHaveValue("Enviar");
    expect(button).toHaveProperty('type', 'button');
  });

  it("Verificando se o botão e o campo email estão funcionando", () => {
    render(<App />);
    const EMAIL_USER = 'email@email.com';

    const textEmail = screen.getByTestId('id-email-user');
    
    expect(textEmail).toBeInTheDocument();
    expect(textEmail).toHaveTextContent('Valor:');
    
    // expect(screen.getByTestId('id-email-user')).toBeInTheDocument();
    // expect(screen.getByTestId('id-email-user')).toHaveTextContent('Valor:');

    const btnSend = screen.getByTestId('id-send');
    const inputEmail = screen.getByLabelText('Email');
    
    userEvent.type(inputEmail, EMAIL_USER);
    userEvent.click(btnSend);
    
    // userEvent.type(screen.getByLabelText('Email'), 'email@email.com');
    // userEvent.click(screen.getByTestId('id-send'));

    expect(inputEmail).toHaveValue('');
    expect(textEmail).toHaveTextContent(`Valor: ${ EMAIL_USER }`);
  })
});


// acessar os elementos 
// interagir com os elementos (se for necessário)
// fazer os teste 