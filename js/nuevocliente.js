import { showAlert, validateObj } from './funciones.js'
import { newCustomer } from './API.js'


(function () {
    const form = document.querySelector('#formulario')
    form.addEventListener('submit', validateCustomer)

    function validateCustomer(e) {
        e.preventDefault()

        const name = document.querySelector('#nombre').value
        const mail = document.querySelector('#email').value
        const phone = document.querySelector('#telefono').value
        const company = document.querySelector('#empresa').value

        //Definimos un objeto ccon los valores 
        const customer = {
            name: name,
            mail: mail,
            phone: phone,
            company: company
        }

        if (validateObj(customer)) {
            //Mostrar mensaje
            showAlert("Todos los campos son obligatorios")
            return
        }
        newCustomer(customer)
    }

})()