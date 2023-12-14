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

/* const nro1 = parseInt(prompt('Ingresar n1:'))
const nro2 = parseInt(prompt('Ingresar n2:'))

if (nro1 > nro2) {
    console.log('El número mayor es el 1')
} else if (nro1 < nro2) {
    console.log('El número mayor es el 2')
} else {
    console.log('Los números son iguales')
}
 */

/* if (nro1 === nro2) {
    console.log('Los números son iguales')
} else if (nro1 < nro2) {
    console.log('El número mayor es el 2')
} else {
    console.log('El número mayor es el 1')
} */

/* const nro1 = parseInt(prompt('Ingresar nro:'))

if (nro1 === 1) {
    console.log('Proceso en base a la opción 1')
} else if (nro1 === 2) {
    console.log('Proceso en base a la opción 2')
} else if (nro1 === 3) {
    console.log('Proceso en base a la opción 3')
} else {
    console.log('Opción no es válida')
} */

/* switch (nro1) {
    case 1:
        console.log('Proceso en base a la opción 1')
        break
    
    case 2:
        console.log('Proceso en base a la opción 2')
        break;

    case 3:
        console.log('Proceso en base a la opción 3')
        break;

    default:
        console.log('Opción no es válida')
} */


/**
 * - que pida un número
 * - nos diga si es perfectamente divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)
 */

/* const nro = +prompt('Ingresar nro:')
const DIVISOR = 7
if (nro % DIVISOR === 0) {
    console.log(`${nro} ES perfectamente divisible por ${DIVISOR}`) // templates
} else {
    console.log(`${nro} NO ES perfectamente divisible por ${DIVISOR}`)
} */

/**
 * Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible
 * (hay que decir todos por los que es divisible)
 */

// Esta es la versión sin arrays, repitiendo código para cada posible divisor solicitado
let contador = 0

const nro = +prompt('Ingresar nro:')

let divisor = 2
if (nro % divisor === 0) {
    contador = contador + 1 // es equivalente a contador++
    console.log(`${nro} es perfectamente divisible por ${divisor}`)
}

divisor = 3
if (nro % divisor === 0) {
    contador = contador + 1
    console.log(`${nro} es perfectamente divisible por ${divisor}`)
}

divisor = 5
if (nro % divisor === 0) {
    contador = contador + 1
    console.log(`${nro} es perfectamente divisible por ${divisor}`)
}

divisor = 7
if (nro % divisor === 0) {
    contador = contador + 1
    console.log(`${nro} es perfectamente divisible por ${divisor}`)
}

// console.log(`${nro} es perfectamente divisible por ${contador} de los divisores`)

// Esta es la versión con array, podemos ver un código mucho más compacto y versátil
// Guardamos los divisores en un array
const divisores = [2, 3, 5, 7, 15]

// Recorremos el array para ir chequeando divisor por divisor, y mostrando el mensaje si corresponde
for (let c1 = 0; c1 < divisores.length; c1++) {
    if (nro % divisores[c1] === 0) {
        console.log(`${nro} es perfectamente divisible por ${divisores[c1]}`)
    }
}
