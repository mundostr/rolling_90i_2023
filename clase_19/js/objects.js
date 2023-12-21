// Arrays vs objetos

// Array con datos del mismo tipo
const lecturas = [3, 8, 23, 1, -10, 15]
const datosPersonalesArray = ['Carlos Perren', 'idux.net@gmail.com', 112000, true]

// Objeto, almaceno conjunto de datos bajo
// formato clave: valor
const datosPersonalesObj = {
    nombre: 'Carlos Perren',
    email: 'idux.net@gmail.com',
    saldo: 115200,
    activo: true
}

// Acceso a elementos individuales en array
console.log(datosPersonalesArray[1])
// Acceso a elementos individuales en obj c/ formato array
console.log(datosPersonalesObj['saldo'])
// Acceso a elementos individuales en obj c/ notación de puntos
console.log(datosPersonalesObj.saldo)
console.log(datosPersonalesObj.nombre)
