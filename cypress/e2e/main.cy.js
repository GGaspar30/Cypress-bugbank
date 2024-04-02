/// <reference types="Cypress" />

describe('Cadastro de conta bancaria', () => {
beforeEach(()=>{cy.visit('https://bugbank.netlify.app')})

  it('Acessa o cadastro de usuario ', () => {
    cy.criaLogin();
    cy.logar();
    cy.pegarNumeroConta();
    //cy.fazTransferencia();
  })
   
})