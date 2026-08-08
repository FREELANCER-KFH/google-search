import { BtnAdjuntarArchivos } from '../elements/buttons/btn-adjuntar-archivos.js'
import { BtnMicrofono } from '../elements/buttons/btn-microfono.js'
import { BtnBuscarImagen } from '../elements/buttons/btn-buscar-imagen.js'
import { BtnModoIA } from '../elements/buttons/btn-modo-ia.js'

export const CuadroBusqueda = () => {
  const container = document.createElement('div')
  container.className = 'search-box'

  const input = document.createElement('input')
  input.type = 'text'
  input.placeholder = 'Buscar en Google o escribir una URL'

  // Ensamblaje modular
  container.append(
    BtnAdjuntarArchivos(),
    input,
    BtnMicrofono(),
    BtnBuscarImagen(),
    BtnModoIA()
  )

  return container
}