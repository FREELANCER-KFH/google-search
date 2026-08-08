export const BtnAdjuntarArchivos = () => {
  const button = document.createElement('button')
  button.className = 'btn-icon btn-adjuntar'
  button.innerHTML = '➕'
  button.addEventListener('click', adjuntar-archivos)
  return button
}

const adjuntar_archivos = () => {
    alert('adjuntar archivos')
    console.log('adjuntar archivos')
}