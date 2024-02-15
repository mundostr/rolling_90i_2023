// Constantes y variables globales
const productosDisponibles = [
    {codigo: 1, nombre: 'Manzana kg', precio: 1500, stock: 100 },
    {codigo: 2, nombre: 'Pera kg', precio: 1100, stock: 100 },
    {codigo: 3, nombre: 'Naranja kg', precio: 1600, stock: 200 },
    {codigo: 4, nombre: 'Limón kg', precio: 1100, stock: 150 },
    {codigo: 5, nombre: 'Ananá kg', precio: 3000, stock: 50 },
    {codigo: 6, nombre: 'Ciruelas kg', precio: 2000, stock: 150 },
];

// Funciones
const mostrarProductos = (productos) => {
    console.log('Productos disponibles');

    productos.forEach((item) => {
        const detalleProducto = `${item.codigo} - ${item.nombre}: $${item.precio} (${item.stock} en stock)`;
        console.log(detalleProducto);
    })
}

const procesarCompra = (productos) => {
    const carrito = [];
    const codigoLimite = productos.length;
    
    let codigo, cantidad;
    
    do {
        codigo = parseInt(prompt('Indicar código de producto'));
        if (codigo > 0 && codigo <= codigoLimite) {
            const stock = productos[codigo - 1].stock;
            
            cantidad = parseInt(prompt('Indicar cantidad'));
            if (cantidad > 0 && cantidad <= stock) {
                const productoAAgregar = {
                    nombre: productos[codigo - 1].nombre,
                    ctd: cantidad,
                    subtotal: cantidad * productos[codigo - 1].precio
                };

                carrito.push(productoAAgregar);
            } else {
                alert(`La cantidad debe ser positiva y menor o igual a ${stock}`);
            }
        } else if (codigo !== 0) {
            alert(`El código debe ser positivo y menor o igual a ${codigoLimite}`);
        }
    } while(codigo !== 0)

    return carrito;
}

const mostrarCarrito = (carrito) => {
    console.log('Estado actual carrito');

    if (carrito.length === 0) {
        console.log('Sin productos');
    } else {
        let total = 0;

        carrito.forEach((item) => {
            const detalleProducto = `${item.ctd} x ${item.nombre} = $${item.subtotal}`;
            total += item.subtotal;
            console.log(detalleProducto);
        })

        console.log(`Total general: $${total}`);
        
        /**
         * Primer acercamiento al uso del DOM
         * Control de un elemento mediante Javascript
         
         * Disponemos del objeto window.document, con el cual podemos acceder a toda una serie
         * de propiedades para controlar el DOM. Una de ellas es getElementsById, que nos
         * permite crear una referencia a cualquier elemento del DOM por su id.
         * 
         * Una vez que tenemos la referencia, utilizamos ese objeto para modificar las
         * propiedades del elemento, como en este caso innerHTML, con la que podemos
         * cambiar el contenido interno HTML del elemento.
         */
        const indicadorTotal = window.document.getElementById('total');
        indicadorTotal.innerHTML = `<b>Total: ${total}</b>`;
    }
}


// Flujo principal
console.log('ROLLING Compras');
mostrarProductos(productosDisponibles);
const carritoActual = procesarCompra(productosDisponibles);
mostrarCarrito(carritoActual);