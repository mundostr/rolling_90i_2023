// Se importan la definición de la clase y la lista de productos ofertados
import { Carrito } from './carrito.class.js';
import { productosDisponibles } from './productos.js';

// Se crea una nueva instancia del carrito y se la agrega al objeto window
// para poder accederla globalmente sin problemas
const carrito = new Carrito();
window.carrito = carrito;
const listadoProductos = document.getElementById('listadoProductos');

// Dejamos esto como ejemplo de función, podríamos por supuesto moverlo a una clase
const mostrarProductos = (tipo) => {
    let hijo = listadoProductos.lastElementChild;
    while (hijo) {
        listadoProductos.removeChild(hijo);
        hijo = listadoProductos.lastElementChild;
    }

    const productosFiltrados = productosDisponibles.filter(item => item.tipo === tipo);
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

// Se activa un listener sobre el cambio de valor en el select
const selectorTipo = document.getElementById('selectorTipo');
selectorTipo.addEventListener('change', (event) => {
    mostrarProductos(event.target.value);
});

// Flujo principal
carrito.mostrar();
mostrarProductos('F');