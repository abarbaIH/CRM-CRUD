const url = 'http://localhost:4000/clientes'

// Creación de nuevo cliente
export const newCustomer = async (customer) => { //hacemos la arrow function asincrona

    try { //hacemos un try catch ya que es un proceso que puede fallar
        await fetch(url, { // hacemos await el fetch ya que es la consulta a la API y puede ser que tarde
            method: 'POST', // le pasamos el metodo, en este ccaso es post porque vamos a crear un nuevo registro en el backend
            body: JSON.stringify(customer), // pasamos el objeto A CREAR customer a un formato que entienda el backen
            headers: {
                'Content-Type': 'application/json' //le pasamos el tipo de contenido
            }
        })
        window.location.href = 'index.html' // esto nos manda de nuevo a la pagina de incio, solo se ejecuta si lo anterio fue bien
    } catch (error) {
        console.log(error) // si falla que nos diga el fallo
    }

}

// Obtención de listado de clientes
export const getCustomers = async () => {
    try {
        const response = await fetch(url) // por defecto manda un GET, por eso no hay que especificar el método
        const data = await response.json()
        return data

    } catch (error) {
        console.log(error)
    }
}

// Eliminar cliente

export const deleteCustomer = async (id) => {
    try {
        await fetch(`${url}/${id}`, {
            method: 'DELETE'
        })
    } catch (error) {
        console.log(error)
    }
}

// EDITAR
// Traer cliente por su ID
export const takeCustomerById = async (id) => {
    try {
        const response = await fetch(`${url}/${id}`)
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error)
    }
}

// Actualiza el registro
export const updateCustomer = async (customer) => {
    const { id } = customer
    try {
        await fetch(`${url}/${id}`, {
            method: 'PUT',
            body: JSON.stringify(customer),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        window.location.href = 'index.html'
    } catch (error) {
        console.log(error)

    }
}
