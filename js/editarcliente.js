import { takeCustomerById, updateCustomer } from "./API.js"
import { showAlert, validateObj } from "./funciones.js"

(function () {

    // Campos del formulario
    const nameInput = document.querySelector('#nombre')
    const companyInput = document.querySelector('#empresa')
    const phoneInput = document.querySelector('#telefono')
    const mailInput = document.querySelector('#email')
    const idInput = document.querySelector('#id')


    document.addEventListener('DOMContentLoaded', async () => {
        // con esto nos traemos los parametros de la URL
        const parametersURL = new URLSearchParams(window.location.search)

        const customerID = parseInt(parametersURL.get('id'))

        const customer = await takeCustomerById(customerID) // hay que hacerlo asincrono para que espere a traer los datos para continuar ejecutando

        showCustomerOnForm(customer)

        const form = document.querySelector('#formulario')
        form.addEventListener('submit', validateCustomer)

    })

    function showCustomerOnForm(customer) {
        const { name, company, phone, mail, id } = customer

        nameInput.value = name
        companyInput.value = company
        phoneInput.value = phone
        mailInput.value = mail
        idInput.value = id

    }

    function validateCustomer(e) {
        e.preventDefault()

        const customer = {
            name: nameInput.value,
            mail: mailInput.value,
            phone: phoneInput.value,
            company: companyInput.value,
            id: parseInt(idInput.value)
        }

        if (validateObj(customer)) {
            //Mostrar mensaje
            showAlert("Todos los campos son obligatorios")
            return
        }

        // Reescribe el objeto
        updateCustomer(customer)
    }
})()