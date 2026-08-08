export const btnAdjuntarArchivos = () => {
    const element = document.createElement('button')
    element.classList.add('boton')
    element.id = 'btn-adjuntar-archivo'
    element.textContent = '+'
    element.addEventListener('click', adjuntar_archivos)

    return element
}

const adjuntar_archivos = () => {
    alert('este es un mensaje de prueba')
    console.log('este es un mensaje de prueba')
}