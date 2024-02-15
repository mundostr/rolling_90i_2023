// Constantes y variables globales
const carrito = [];
const productosDisponibles = [
    {codigo: 1, nombre: 'Manzana kg', precio: 1500, stock: 100 },
    {codigo: 2, nombre: 'Pera kg', precio: 1100, stock: 100 },
    {codigo: 3, nombre: 'Naranja kg', precio: 1600, stock: 200 },
    {codigo: 4, nombre: 'Limón kg', precio: 1100, stock: 150 },
    {codigo: 5, nombre: 'Ananá kg', precio: 3000, stock: 50 },
    {codigo: 6, nombre: 'Ciruelas kg', precio: 2000, stock: 150 },
    {codigo: 7, nombre: 'Higos kg', precio: 2500, stock: 75 },
];
// Generamos referencias a elementos del DOM mediante su id para poder manejarlos
const listadoProductos = document.getElementById('listadoProductos');
const listadoCarrito = document.getElementById('listadoCarrito');

// Declaraciones de funciones y clases
const mostrarProductos = () => {
    // Recorremos el array de productos disponibles
    productosDisponibles.forEach((item) => {
        // Creamos con templates el texto que pondremos en el item
        const detalleProducto = `${item.codigo} - ${item.nombre} ($${item.precio}): ${item.stock} en stock`;
        // Creamos un nuevo elemento en el DOM, tipo li
        const nuevoLi = document.createElement('li');
        
        // Le agregamos la clase list-group-item
        nuevoLi.classList.add('list-group-item');
        // Le agregamos el contenido de detalleProducto
        nuevoLi.innerHTML = detalleProducto;
        // y finalmente a todo ese elemento, se lo insertamos
        // a la lista ul listadoProductos
        listadoProductos.append(nuevoLi);
    });
}

const mostrarCarrito = () => {
    if (carrito.length === 0) { // Si el carrito está vacío
        listadoCarrito.innerHTML = 'Sin productos';
    } else {
        // Limpia listadoCarrito en el DOM, buscando
        // el último elemento hijo que contiene (lastElementChild),
        // borrándolo y continuando el while mientras todavía haya
        // algún otro hijo.
        let hijo = listadoCarrito.lastElementChild;
        while (hijo) {
            listadoCarrito.removeChild(hijo);
            hijo = listadoCarrito.lastElementChild;
        }

        // Recorremos el carrito, calculando total en base a sumatoria de subtotales
        // y volviendo a cargar listadoCarrito en el DOM con los items del array
        let total = 0;
        carrito.forEach((item) => {
            const detalleProducto = `${item.cantidad} x ${item.nombre} ($${item.subtotal})`;
            const nuevoLi = document.createElement('li');
            
            nuevoLi.classList.add('list-group-item');
            nuevoLi.innerHTML = detalleProducto;
            listadoCarrito.append(nuevoLi);
            total += item.subtotal;
        });

        // Actualizamos el título con el total general
        const totalCarrito = document.getElementById('totalCarrito');
        totalCarrito.innerHTML = `Carrito ($ ${total})`;
    }
}

const agregarACarrito = () => {
    const limiteProductos = productosDisponibles.length;
    // Generamos referencia a los campos codigoProducto y cantidadProducto,
    // para obtener sus valores
    const codigoProducto = document.getElementById('codigoProducto').value;
    const cantidadProducto = document.getElementById('cantidadProducto').value;
    
    // Verificamos que el código sea válido
    if (codigoProducto > 0 && codigoProducto <= limiteProductos) {
        // Verificamos que la cantidad sea válida y recuperamos
        // el stock del item que corresponde a codigoProducto
        const stock = productosDisponibles[codigoProducto - 1].stock;
        if (cantidadProducto > 0 && cantidadProducto <= stock) {
            // Si está todo ok, generamos el objeto con los datos que nos interesan
            // y hacemos el push al array del carrito
            const productoAAgregar = {
                nombre: productosDisponibles[codigoProducto - 1].nombre,
                precio: productosDisponibles[codigoProducto - 1].precio,
                cantidad: cantidadProducto,
                subtotal: cantidadProducto * productosDisponibles[codigoProducto - 1].precio
            };

            carrito.push(productoAAgregar);
            // Ni bien actualizamos el array, volvemos a llamar a mostrarCarrito()
            // para actualizar la lista en pantalla.
            mostrarCarrito();
        } else {
            alert(`La cantidad debe estar entre 1 y ${stock}`);
        }
    } else {
        alert(`El código de producto debe estar entre 1 y ${limiteProductos}`);
    }
}


// Flujo principal
// Solo llamamos a mostrarProductos() y mostrarCarrito(), a partir de ahora
// la acción de agregar la disparará el usuario cuando pulse el botón correspondiente
mostrarProductos();
mostrarCarrito();