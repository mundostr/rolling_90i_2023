/**
 * Como productosDisponibles se exporta ahora por defecto (export default),
 * lo importamos SIN desestructurar, es decir, sin llaves.
 * 
 * Aprovechamos el constructor para inicializar el listener del campo select selectorTipo,
 * por supuesto podríamos también hacerlo en un método separado.
 */

import productosDisponibles from './productos.js';

const selectorTipo = document.getElementById('selectorTipo');
const listadoProductos = document.getElementById('listadoProductos');

export class Oferta {
    constructor() {
        selectorTipo.addEventListener('change', (event) => {
            this.mostrar(event.target.value);
        });
    }

    mostrar(tipo) {
        let hijo = listadoProductos.lastElementChild;
        while (hijo) {
            listadoProductos.removeChild(hijo);
            hijo = listadoProductos.lastElementChild;
        }

        const productosFiltrados = productosDisponibles.filter((item) => item.tipo === tipo);
        productosFiltrados.forEach((item, index) => {
            const detalleProducto = `
            <div class="card card-personalizada">
                <img src="img/${item.imagen}" class="card-img-top" alt="Imagen ilustrativa" style="margin: 0 auto;">
                    
                <div class="card-body">
                    <h3 class="card-title">${item.nombre}</h3>
                    <h4 class="card-title">$ ${item.precio.toFixed(2)}</h4>
                    <h5 class="card-title">${item.stock} kg en stock</h5>
                        
                    <div class="mt-4">
                        <i class="fa-solid fa-cart-plus btn btn-agregar" onclick="carrito.agregar(${index}, ${item.codigo})"></i>
                        <input class="form-control cpo-cantidad" type="number" value="1" min="1" max="${item.stock}">
                    </div>
                </div>
            </div>
        `;

            const nuevoItem = document.createElement('div');
            nuevoItem.classList.add('col-lg-3', 'col-md-4', 'col-sm-6', 'col-12', 'mb-4');
            nuevoItem.innerHTML = detalleProducto;
            listadoProductos.append(nuevoItem);
        });
    }
}
