/// programacion en JavaScript
//selector por elemento dividido por página

class pantallas{

        // Página de login
        login = {
               // txt_usuario:'#mid_left > form > div > table > tbody > tr:nth-child(1) > td:nth-child(2) > input[type=text]',
               txt_usuario: "[name='usuario']",
             //txt_clave:'#mid_left > form > div > table > tbody > tr:nth-child(2) > td:nth-child(2) > input[type=password]',
               txt_clave : "[name='clave']",
               btn_ingresar:'#btnIngresar'
        }
// Página de seleccion del consorcio
                
        consorcios = {

                btn_consorcio_de_prueba:'#tableData > tbody > tr:nth-child(3) > td.evenselected > p > a',
                menu_usuarios:'#tp_menu > ul > li:nth-child(8) > a',
                submenu_datos_adm:'#tp_menu > ul > li:nth-child(8) > ul > li:nth-child(6) > font > a'
        }
           


                // Datos de la Administración
                datos_administración = {

                        txt_domicilio:"[name='domicilio']",
                        btn_guardar:"body > form > div:nth-child(4) > table > tbody > tr > td:nth-child(2) > input[type=button]",
                        btn_cerrar_sesión:"body > center > div > table > tbody > tr:nth-child(2) > td:nth-child(2) > font > a > font"
                }


}

module.exports = new pantallas();