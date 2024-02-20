/*
Descarga de íconos: https://www.flaticon.com/icons
*/


// Constantes y variables globales
const carrito = [];
// Agregamos el key tipo, para poder filtrar entre frutas y verduras
const productosDisponibles = [
    {codigo: 1, tipo: 'F', nombre: 'Manzana kg', precio: 1500, stock: 100, imagen: 'apple.png' },
    {codigo: 2, tipo: 'F', nombre: 'Pera kg', precio: 1100, stock: 100, imagen: 'pear.png' },
    {codigo: 3, tipo: 'F', nombre: 'Naranja kg', precio: 1600, stock: 200, imagen: 'orange.png' },
    {codigo: 4, tipo: 'F', nombre: 'Limón kg', precio: 1100, stock: 150, imagen: 'lemon.png' },
    {codigo: 5, tipo: 'F', nombre: 'Ananá kg', precio: 3000, stock: 50, imagen: 'pineapple.png' },
    {codigo: 6, tipo: 'F', nombre: 'Ciruelas kg', precio: 2000, stock: 150, imagen: 'plum.png' },
    {codigo: 7, tipo: 'F', nombre: 'Higos kg', precio: 2500, stock: 50, imagen: 'fig.png' },
    {codigo: 8, tipo: 'F', nombre: 'Banana kg', precio: 1100, stock: 70, imagen: 'banana.png' },
    {codigo: 9, tipo: 'F', nombre: 'Mango kg', precio: 8100, stock: 30, imagen: 'mango.png' },
    {codigo: 10, tipo: 'V', nombre: 'Lechuga kg', precio: 1200, stock: 100, imagen: 'lettuce.png' },
    {codigo: 11, tipo: 'V', nombre: 'Tomate kg', precio: 1100, stock: 100, imagen: 'tomato.png' },
    {codigo: 12, tipo: 'V', nombre: 'Cebolla kg', precio: 900, stock: 250, imagen: 'onion.png' },
];

const listadoProductos = document.getElementById('listadoProductos');
const listadoCarrito = document.getElementById('listadoCarrito');
const toast = document.getElementById('toast');
const mensajeToast = bootstrap.Toast.getOrCreateInstance(toast);
// const btnAgregar = document.getElementById('btnAgregar');

// Declaraciones de funciones y clases
const mostrarProductos = (tipo) => {
    // Esta secuencia usa el método removeChild recursivamente dentro de un while,
    // para vaciar el listado de productos y comenzar desde cero
    let hijo = listadoProductos.lastElementChild;
    while (hijo) {
        listadoProductos.removeChild(hijo);
        hijo = listadoProductos.lastElementChild;
    }

    /**
     * Ahora generamos un array extra con los productos disponibles filtrados en base al tipo
     * recibido como parámetro. Recordar que filter ejecuta la función anónima que le indicamos
     * para cada item del array, y devuelve solo aquellos que cumplan la condición
     * (en este caso item.tipo === tipo)
     */
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
                        <i class="fa-solid fa-cart-plus btn btn-agregar" onclick="agregarACarrito(${index}, ${item.codigo})"></i>
                        <input class="form-control cpo-cantidad" type="number" value="1">
                    </div>
                </div>
            </div>
        `;
        
        // Agregamos la capa general que contendrá al card, y aprovechamos las clases de columna
        const nuevoItem = document.createElement('div');
        nuevoItem.classList.add('col-lg-3', 'col-md-4', 'col-sm-6', 'col-12', 'mb-4');
        nuevoItem.innerHTML = detalleProducto;
        listadoProductos.append(nuevoItem);
    });
}

const mostrarCarrito = () => {
    if (carrito.length > 0) {
        // Esta secuencia usa el método removeChild recursivamente dentro de un while,
        // para vaciar el listado del carrito y comenzar desde cero
        let hijo = listadoCarrito.lastElementChild;
        while (hijo) {
            listadoCarrito.removeChild(hijo);
            hijo = listadoCarrito.lastElementChild;
        }

        // Recorremos el carrito armando los items li para la lista
        // y actualizando en cada item el total general
        let total = 0;
        carrito.forEach((item) => {
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

const agregarACarrito = (indiceDOM, codigo) => {
    const limiteProductos = productosDisponibles.length;
    // Este index es la posición del producto en el array original, NO el filtrado
    const index = productosDisponibles.findIndex(item => item.codigo === codigo);

    // indiceDOM nos sirve para saber qué campo de cantidad debemos tomar
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
            carrito.push(productoAAgregar);
            mostrarCarrito();
            mensajeToast.show();
        } else {
            alert(`La cantidad debe estar entre 1 y ${stock}`);
        }
    } else {
        alert(`El código de producto es incorrecto`);
    }
}


// Eventos, sintaxis alternativa desde JS para habilitar listeners (escucha de eventos)
// Si agregamos acá un evento click, NO usar atributo onclick en el HTML, uno u otro.
// btnAgregar.addEventListener('click', agregarACarrito);


// Flujo principal
// Solo mostramos el estado actual del carrito y por defecto el listado de frutas
mostrarCarrito();
mostrarProductos('F');