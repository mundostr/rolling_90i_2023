import { recuperarProductos } from './productos.js';

const listadoCarrito = document.getElementById('listadoCarrito');
const toast = document.getElementById('toast');
const mensajeToast = bootstrap.Toast.getOrCreateInstance(toast);

export class Carrito {
    constructor() {
        this.productos = [];
        this.total = 0;
    }

    mostrar() {
        if (this.productos.length > 0) {
            let hijo = listadoCarrito.lastElementChild;
            while (hijo) {
                listadoCarrito.removeChild(hijo);
                hijo = listadoCarrito.lastElementChild;
            }
    
            let total = 0;
            this.productos.forEach((item) => {
                const detalleProducto = `${item.cantidad} x ${item.nombre} ($${item.subtotal.toFixed(2)})`;
                const nuevoLi = document.createElement('li');
                
                nuevoLi.classList.add('list-group-item');
                nuevoLi.innerHTML = detalleProducto;
                listadoCarrito.append(nuevoLi);
                total += item.subtotal;
            });
    
            const totalFormateado = total.toFixed(2);
            const totalCarrito = document.getElementById('totalCarrito');
            totalCarrito.innerHTML = `Carrito $ ${totalFormateado}`;
        }
    }

    async agregar(indiceDOM, codigo) {
        const productosDisponibles = await recuperarProductos();

        const limiteProductos = productosDisponibles.length;
        const index = productosDisponibles.findIndex(item => item.codigo === codigo);
        const cantidades = document.getElementsByClassName('cpo-cantidad');
        const cantidad = cantidades[indiceDOM].value;
        
        if (index >= 0 && index <= limiteProductos) {
            const stock = productosDisponibles[index].stock;
            if (cantidad > 0 && cantidad <= stock) {
                const productoAAgregar = {
                    nombre: productosDisponibles[index].nombre,
                    precio: productosDisponibles[index].precio,
                    cantidad: cantidad,
                    subtotal: cantidad * productosDisponibles[index].precio
                };

                cantidades[indiceDOM].value = 1;
                this.productos.push(productoAAgregar);
                this.mostrar();
                mensajeToast.show();
            } else {
                alert(`La cantidad debe estar entre 1 y ${stock}`);
            }
        } else {
            alert(`El código de producto es incorrecto`);
        }
    }
}
