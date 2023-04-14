///<reference types="Cypress" />

import pantallas from '../selectores/misselectores'

Cypress.Commands.add("escribir", (selector, texto) => {
  cy.get(selector).clear().type(texto)
})

Cypress.Commands.add("hagoclick", (selector) => {
  cy.get(selector).click();
})

Cypress.Commands.add("esperar", () => {
  cy.wait(3000)
})

 Cypress.Commands.add('mi_login', () => {

  cy.fixture('./datos_login').then( (test_login) => {
    //login con datos del fixture
    cy.escribir(pantallas.login.txt_usuario, test_login.usuario)
    cy.escribir(pantallas.login.txt_clave,test_login.clave)
    cy.hagoclick(pantallas.login.btn_ingresar, )
    //cy.get(pantallas.login.txt_usuario).type('prueba')
    //cy.get("[name='usuario']").type('prueba')
    //cy.get(pantallas.login.txt_clave).type('12345')

    })

  
        

 })


