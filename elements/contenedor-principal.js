import { Logo } from './logo.js'
import { CuadroBusqueda } from './cuadro-busqueda.js'
import { BtnBuscarConGoogle } from './buttons/btn-buscar-con-google.js'
import { BtnBuscarConSuerte } from './buttons/btn-buscar-con-suerte.js'

export const ContenedorPrincipal = () => {
  const mainContainer = document.createElement('div')
  mainContainer.className = 'main-container'

  const actionsContainer = document.createElement('div')
  actionsContainer.className = 'actions-container'
  actionsContainer.append(BtnBuscarConGoogle(), BtnBuscarConSuerte())

  mainContainer.append(
    Logo(),
    CuadroBusqueda(),
    actionsContainer
  )

  return mainContainer
}