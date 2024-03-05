/**
 * En esta versión, verificamos si tenemos una key llamada productosDisponibles
 * en el LocalStorage del navegador, si es así completamos el array con ese contenido,
 * caso contrario rearmamos el array manualmente y lo guardamos en el LocalStorage.
 * 
 * MUY IMPORTANTE, notar el uso de JSON.stringify() para convertir el objeto JS a una
 * cadena JSON válida, y el JSON.parse() para el proceso inverso.
 */

let productosDisponibles;

const productosDisponiblesLS = JSON.parse(localStorage.getItem('productosDisponibles'));

if (productosDisponiblesLS) {
    productosDisponibles = productosDisponiblesLS;
    
    console.log('Se recupera desde LocalStorage');
} else {
    productosDisponibles = [
        { codigo: 1, tipo: 'F', nombre: 'Manzana kg', precio: 1500, stock: 100, imagen: 'apple.png' },
        { codigo: 2, tipo: 'F', nombre: 'Pera kg', precio: 1100, stock: 100, imagen: 'pear.png' },
        { codigo: 3, tipo: 'F', nombre: 'Naranja kg', precio: 1600, stock: 200, imagen: 'orange.png' },
        { codigo: 4, tipo: 'F', nombre: 'Limón kg', precio: 1100, stock: 150, imagen: 'lemon.png' },
        { codigo: 5, tipo: 'F', nombre: 'Ananá kg', precio: 3000, stock: 50, imagen: 'pineapple.png' },
        { codigo: 6, tipo: 'F', nombre: 'Ciruela kg', precio: 2000, stock: 150, imagen: 'plum.png' },
        { codigo: 7, tipo: 'F', nombre: 'Higo kg', precio: 2500, stock: 50, imagen: 'fig.png' },
        { codigo: 8, tipo: 'F', nombre: 'Banana kg', precio: 1100, stock: 70, imagen: 'banana.png' },
        { codigo: 9, tipo: 'F', nombre: 'Mango kg', precio: 8100, stock: 30, imagen: 'mango.png' },
        { codigo: 10, tipo: 'V', nombre: 'Lechuga kg', precio: 1200, stock: 100, imagen: 'lettuce.png' },
        { codigo: 11, tipo: 'V', nombre: 'Tomate kg', precio: 1100, stock: 100, imagen: 'tomato.png' },
        { codigo: 12, tipo: 'V', nombre: 'Cebolla kg', precio: 900, stock: 250, imagen: 'onion.png' },
    ];

    localStorage.setItem('productosDisponibles', JSON.stringify(productosDisponibles));
    
    console.log('Se crea y almacena en LocalStorage');
}

export default productosDisponibles;
