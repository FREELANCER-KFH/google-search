import { BtnAdjuntarArchivos } from './buttons/btn-adjuntar-archivos.js'
import { BtnMicrofono } from './buttons/btn-microfono.js'
import { BtnBuscarImagen } from './buttons/btn-buscar-imagen.js'
import { BtnModoIA } from './buttons/btn-modo-ia.js'

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