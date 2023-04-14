///<reference types="Cypress" />

import pantallas from '../selectores/misselectores'

describe('Login de Usuario en Emaras', ()=>{
    
    beforeEach('Conectarme a la web de Emaras', ()=>{
    //cy.viewport('samsung-s10','landscape')
    cy.viewport(1000,600)
    cy.visit('')

    })
    
    it('Escribo mi usuario y clave', ()=>{
        //Pantalla de login
        //selector de google chrome
        //antes em conecto al fixture login.json
        
        cy.mi_login()
        
        //Pantalla seleccion de consorcios
        cy.hagoclick(pantallas.consorcios.btn_consorcio_de_prueba, )
        cy.hagoclick(pantallas.consorcios.menu_usuarios, )
        cy.hagoclick(pantallas.consorcios.submenu_datos_adm, )
        // cy.get(pantallas.consorcios.btn_consorcio_de_prueba).click()
        // cy.get(pantallas.consorcios.menu_usuarios).click()
        // cy.get(pantallas.consorcios.submenu_datos_adm).click()
        // Pantalla de datos de la administracion
        cy.fixture('./datos_adm').then( (test_adm) => {
            //tomo los datos del txt domicilio y lo comparo con el valor del fixture
        cy.get(pantallas.datos_administración.txt_domicilio).should('have.value',test_adm.domicilio )

        cy.get('input[name="nombre"]').should('have.value', test_adm.nombre )

        // cy.escribir(pantallas.datos_administración.txt_domicilio, test_adm.domicilio)
        })
        
        // cy.hagoclick(pantallas.datos_administración.btn_guardar, )
        cy.hagoclick(pantallas.datos_administración.btn_cerrar_sesión, )
        // cy.get(pantallas.datos_administración.txt_domicilio).clear().type('Gorriti 1000')
        // cy.get(pantallas.datos_administración.btn_guardar).click()
        // cy.get(pantallas.datos_administración.btn_cerrar_sesión).click()
        
    })

    


})


