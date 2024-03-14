// import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

/**
 * <React.StrictMode> es una etiqueta que podemos agregar en etapa de desarrollo
 * para chequear problemas potenciales de código, consumo de memoria y otras
 * advertencias.
 * 
 * Es la razón por la cual se visualizan salidas dobles en consola, no es un mal
 * funcionamiento sino una herramienta adicional para desarrollo.
 * 
 * Por supuesto se puede quitar y renderizar la App directamente.
 */

/* ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
) */

ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
)
