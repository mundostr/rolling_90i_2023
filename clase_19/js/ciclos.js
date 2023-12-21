/**
 * Elementos básicos de lenguaje
 * Ciclos
 * 
 * Un ciclo (loop / bucle) nos permite repetir instrucciones.
 * Utiliza una variable auxiliar interna, o una condición, para determinar cómo se repite.
 * 
 * De esa forma, podemos tener:
 * - ciclos finitos: x cantidad de veces.
 * - ciclos infinitos: durante toda la ejecución del código.
 * - ciclos indefinidos: mientras se cumpla una condición o hasta que suceda cierto evento.
*/

// Si debo imprimir los números del 1 al 10, por supuesto puedo hacerlo a mano:
// pero lógicamente no es muy eficiente, sobre todo a medida que aumenta la cantidad
console.log('Manualmente')
console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)
console.log(6)
console.log(7)
console.log(8)
console.log(9)
console.log(10)

// Un ciclo nos da un bloque de código ordenado que podemos repetir
// Vemos que no solo el código ha quedado más compacto, sino también más flexible,
// ya que modificando LIMITE, podemos variar la cantidad de veces que se repite.
console.log('Utilizando un ciclo FINITO')
const LIMITE = 10
for (let c1 = 1; c1 <= LIMITE; c1++) {
    console.log(c1)
}

// Con while() o do while(), podemos generar un ciclo INFINITO o INDEFINIDO,
// según la condición que utilicemos.
// En este caso indicamos que el ciclo debe repetirse mientras ingreso sea
// distinto de 1, 2 y 3.
// Mientras coloquemos cualquier valor que no sea 1, 2 o 3, el ciclo seguirá
// y volverá a solicitar otro valor.
// Cuando coloquemos 1, 2 o 3, el ciclo se interrumpirá y el sistema continuará
// con la siguiente instrucción por fuera (console.log(ingreso))
console.log('Utilizando un ciclo INFINITO o INDEFINIDO')
let ingreso = 0
do {
    ingreso = parseInt(prompt('Ingresar opción (1 | 2 | 3'))
} while (ingreso !== 1 && ingreso !== 2 && ingreso !== 3)
console.log(ingreso)