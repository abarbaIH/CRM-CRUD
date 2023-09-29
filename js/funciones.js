export function showAlert(message) {

    const alert = document.querySelector('.bg-red-100')

    // si no hay alerta, creala
    if (!alert) {
        const alert = document.createElement('P')
        alert.classList.add('bg-red-100', 'border-red-400', 'text-red-700', 'px-4', 'py-3', 'rounded', 'max-w-lg', 'mx-auto', 'mt-6', 'text-center')
        alert.innerHTML = `
            <strong class="font-bold">Error!</strong>
            <span class="block sm:inline">${message}</span>
        `

        const form = document.querySelector('#formulario')
        form.appendChild(alert)

        setTimeout(() => {
            alert.remove()
        }, 4000);
    }
}

export function validateObj(obj) {
    return !Object.values(obj).every(input => input !== '') //retorna true or false en funcion de si hay algun campo vacío
}