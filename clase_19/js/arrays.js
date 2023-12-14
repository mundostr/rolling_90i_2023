/**
 * Arrays
 */

// Constantes y variables: valores UNITARIOS
/* const PI = 3.14
const nombre = 'Carlos Perren'
const activo = true
let valor = 15 */

// Arrays: CONJUNTOS de valores
// lecturas es en este caso un array de números enteros
// El array se declara con corchetes []
const lecturas = [23, 22, 22, 21, 26, 24, 25, 20]
console.log(lecturas)

// Para acceder a los distintos elementos, utilizamos un subíndice que SIEMPRE inicia desde cero
// Así, si queremos obtener el 5to elemento (26), lo accedemos con el subíndice 4.
console.log(lecturas[4])

// length es un método ya disponible que nos devuelve la cantidad de elementos del array.
// Será muy útil al tener que recorrerla con un ciclo común.
console.log(lecturas.length)

// Agregado de elementos a un array, push nos permite agregar elementos al final
const lecturas2 = []
console.log(lecturas2)

lecturas2.push(2)
console.log(lecturas2)

lecturas2.push(3, 5, 7)
console.log(lecturas2)

// Contadores y acumuladores
// Un contador no es más que una variable, a la cual se le asigna su propio valor actual más uno.
console.log(contador)
const contador = 0
contador = contador + 1
console.log(contador)

// Ciclo para recorrer un array y utilizar un acumulador para calcular la sumatoria
let sumatoria = 0
const divisores = [2, 3, 5, 7, 11]
for (let ciclo = 0; ciclo < divisores.length; ciclo++) {
    // El formato es similar al de un contador, solo que no suma de a 1, sino en la cantidad que se indique
    sumatoria = sumatoria + divisores[ciclo]
}
console.log(`Suma de divisores: ${sumatoria}`)

// loop1: sumatoria = 0 + 2 = 2
// loop2: sumatoria = 2 + 3 = 5
// loop3: sumatoria = 5 + 5 = 10
// loop4: sumatoria = 10 + 7 = 17