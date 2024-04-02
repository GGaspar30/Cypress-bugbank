/// <reference types="Cypress" />



Cypress.Commands.add("criaLogin", ()=>{
   cy.get('.ihdmxA').click();
   cy.get(':nth-child(2) > .input__default').type('teste@teste.com',{force: true});
    cy.get('input[type="name"]').type('TESTEQA', {force: true});
    cy.get(':nth-child(4) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').type('123',{force: true});
    cy.get(':nth-child(5) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').type('123',{force: true});
    cy.get('#toggleAddBalance').click({force: true});
    cy.get('.styles__ContainerFormRegister-sc-7fhc7g-0 > .style__ContainerButton-sc-1wsixal-0').click({force: true});
    cy.get('#btnCloseModal').should('be.visible').click();

})
Cypress.Commands.add("logar", ()=>{
 
    
    cy.get('.style__ContainerFormLogin-sc-1wbjw6k-0 > :nth-child(1) > .input__default').type('teste@teste.com',{force: true});
    cy.get('.style__ContainerFormLogin-sc-1wbjw6k-0 > .login__password > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').type('123', {force: true});
    cy.get('.otUnI').click();
    cy.get('#textName').should('be.visible');

  

})

Cypress.Commands.add("pegarNumeroConta", ()=>{

    const account  =  cy.get('#textAccountNumber > span')
                .invoke('text')
                    .then(($account)=>{
                        const conta = Cypress.env('nAccount', $account);
                        const nconta = conta.slice(0,3)
                        const digito = conta.slice(-1);
                        cy.log(nconta)
                        cy.log(digito)
                    });
   
                    return account;

})
Cypress.Commands.add("pegarDigitoDaConta", ()=>{

  const accountDigito = cy.get('#textAccountNumber > span')
                        .invoke('text')
                            .then(($account)=>{
                                const conta = Cypress.env('nAccount', $account);       
                                const digito = conta.slice(-1);
                                cy.log(digito)
                            });
   return accountDigito;

})

Cypress.Commands.add("fazTransferencia", ()=>{
    cy.get('#btn-TRANSFERÊNCIA').click()
    cy.get(':nth-child(1) > .input__default').pegarNumeroConta();
    cy.get('.account__data > :nth-child(2) > .input__default').pegarDigitoDaConta();
    cy.get('.styles__ContainerFormTransfer-sc-1oow0wh-0 > :nth-child(2) > .input__default').type('500');
    cy.get(':nth-child(3) > .input__default').type('testeQA');
    cy.get('.style__ContainerButton-sc-1wsixal-0').click()





})

