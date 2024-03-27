const frmLogin = document.getElementById('frmLogin');
const alertBox = document.getElementById('alertBox');
/**
 * Esta expresión regular (regex) es un PATRON que nos permite verificar si un string
 * tiene un formato válido de email.
 * 
 * Ver más en https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Regular_expressions
 */
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

/**
 * Pulsando el botón en el formulario, se disparará el evento submit, que será capturado
 * por este listener para procesar el formulario.
 */
frmLogin.addEventListener('submit', (objEvento) => {
    /**
     * Paso 1: evitar la recarga de la página.
     * Por defecto el navegador intentará hacerlo cuando se realice el submit.
     */
    objEvento.preventDefault();

    /**
     * Paso 2: validar los campos
     * Acá podemos colocar todos los controles que necesitemos sobre el formato y contenido
     */
    const usuario = document.getElementById('usuario').value;
    const clave = document.getElementById('clave').value;

    // Vemos como podemos utilizar el método test para ver si usuario tiene un formato
    // que cumpla con el patrón de expresión regular indicado arriba
    if (!emailRegex.test(usuario)) {
        alert('El email no tiene un formato válido');
    }
    
    /**
     * Paso 3: procesar
     * En esta etapa realizamos finalmente el procesamiento en base a los datos recibidos
     * del formulario. Para este ejemplo, tenemos una simple base de datos de usuarios
     * cargada en el localStorage, recorremos ese array para ver si encontramos alguna
     * coincidencia contra los datos que nos acaban de enviar.
     */
    const usuarios = JSON.parse(localStorage.getItem('usuarios'));

    let usuarioValidado = false;
    usuarios.forEach(item => {
        if (item.usuario === usuario && item.clave === clave) {
            // Si hay coincidencia, activamos un marcador
            usuarioValidado = true;
        }
    });
    
    if (usuarioValidado) {
        // Este marcador nos indica que el usuario ha puesto datos válidos
        // Almacenamos el marcador en el localStorage (VER carrito.js).
        localStorage.setItem('usuarioActivo', JSON.stringify({ usuario: usuario, validado: true }));
        window.location.href = './index.html';
    } else {
        // alert('Usuario o clave incorrectos');
        alertBox.innerHTML = 'Usuario o clave incorrectos';
        alertBox.classList.remove('d-none');
        setTimeout(() => {
            alertBox.classList.add('d-none');
        }, 2000); // 2000 = milisegundos
    }
});
