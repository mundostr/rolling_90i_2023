/**
 * El archivo principal de queda muy limpio en esta versión.
 * 
 * Se divide en 3 etapas:
 * 1- Importación de las clases.
 * 2- Creación de las instancias (agregando carrito al objeto window para facilitar
 * el acceso desde el código embebido en el HTML).
 * 3- Llamado a los métodos mostrar para iniciar la interfaz.
 */

import { Carrito } from './carrito.class.js';
import { Oferta } from './oferta.class.js';

const oferta = new Oferta();
const carrito = new Carrito();
window.carrito = carrito;

/**
 * Verificamos si hay un key usuarioActivo en el localStorage con un indicador validado en true
 * Si es así, mostramos la página con normalidad, sino redireccionamos al login.
 */
const usuarioActivo = JSON.parse(localStorage.getItem('usuarioActivo')) || { validado: false };

if (usuarioActivo.validado) {
    carrito.mostrar();
    oferta.mostrar('F');
} else {
    window.location.href = './login.html';
}
