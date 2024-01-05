/**
 * Proyecto integración carrito de compras básico
 */

// Declaramos array de objetos para guardar los productos
const productos = [
    {
        nombre: 'Heladera',
        marca: 'Phillips',
        precio: 500000,
        stock: 20
    },
    {
        nombre: 'Cocina',
        marca: 'Eslabón',
        precio: 300000,
        stock: 10
    },
    {
        nombre: 'Procesadora',
        marca: 'Phillips',
        precio: 100000,
        stock: 50
    },
    {
        nombre: 'Batidora',
        marca: 'Ultracomb',
        precio: 60000,
        stock: 5
    }
];
const carrito = [];


// Funciones
function mostrarProductosEnOferta() {
    console.log('PRODUCTOS DISPONIBLES');

    for (let x = 0; x < productos.length; x++) {
        console.log(`${x + 1} -> ${productos[x].nombre} (${productos[x].marca}): $${productos[x].precio} (${productos[x].stock} en stock)`);
    }
}

function habilitarCompra() {
    let producto, cantidad;

    do {
        producto = parseInt(prompt('Indicar producto a agregar'));
        if (producto > 0 && producto <= productos.length) {
            cantidad = parseInt(prompt('Indicar cantidad'));
            if (cantidad > 0 && cantidad <= productos[producto - 1].stock) {
                // todo ok para agregar al carrito
                const agregarEnCarrito = {
                    producto: productos[producto - 1],
                    ctd: cantidad,
                    subtotal: productos[producto - 1].precio * cantidad
                }
                carrito.push(agregarEnCarrito);
            }
        }
    } while(producto !== 0)
}

function mostrarEstadoActualCarrito() {
    if (carrito.length === 0) {
        console.log('Sin productos en carrito');
    } else {
        console.log(`Hay productos en carrito`);
        console.log(carrito);
    }
}


// Flujo principal de código
mostrarProductosEnOferta();
habilitarCompra();
mostrarEstadoActualCarrito();