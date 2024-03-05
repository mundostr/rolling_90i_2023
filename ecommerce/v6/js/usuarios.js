/**
 * De la misma forma que hemos separado los productos en su archivo, exportamos ahora
 * un objeto usuarios con un par de datos de prueba.
 * 
 * 
 */

let usuarios;

const usuariosLS = JSON.parse(localStorage.getItem('usuarios'));

if (usuariosLS) {
    usuarios = usuariosLS;
    
    console.log('Se recuperan usuarios desde LocalStorage');
} else {
    usuarios = [
        { usuario: 'idux.net@gmail.com', clave: 'abc123' },
        { usuario: 'pepe@pepe.com', clave: 'abc456' }
    ];

    localStorage.setItem('usuarios', JSON.stringify(usuarios));
    
    console.log('Se crea y almacena la lista de usuarios en LocalStorage');
}

export default usuarios;