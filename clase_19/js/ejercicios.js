/**
 * Escribe un programa de dos líneas que:
 * - pida el nombre del usuario con un prompt
 * - escriba un texto que diga «Hola nombreUsuario»
 */

// const nombre = prompt('Ingresar nombre:')
// console.log('«Hola ' + nombre + '»')
// Template strings
// console.log(`«Hola, ${nombre}!»`)


/**
 * Escribe un programa de tres líneas
 * - que pida un número
 * - pida otro número
 * - escriba el resultado de la suma
 */

/* let nro1 = prompt('Ingresar n1:')
let nro2 = prompt('Ingresar n2:')
console.log(nro1 + nro2)

let nro1_p = parseInt(nro1)
let nro2_p = parseInt(nro2)
console.log(nro1_p + nro2_p) */

/**
 * - pida dos números
 * - escriba en la pantalla cual es el mayor
 */

const nro1 = parseInt(prompt('Ingresar n1:'))
const nro2 = parseInt(prompt('Ingresar n2:'))

/* if (nro1 > nro2) {
    console.log('El número mayor es el 1')
} else if (nro1 < nro2) {
    console.log('El número mayor es el 2')
} else {
    console.log('Los números son iguales')
} */

if (nro1 === nro2) {
    console.log('Los números son iguales')
} else if (nro1 < nro2) {
    console.log('El número mayor es el 2')
} else {
    console.log('El número mayor es el 1')
}