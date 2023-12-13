/**
 * Elementos básicos de lenguaje
 * Condiciones
 * 
 * Una condición nos permite evaluar una expresión, y por lo tanto, DECIDIR
 * en base a esa expresión si debemos ejecutar una u otra cosa.
 * La condición tendrá solo 2 posibles resultados: true (verdadera) o false (falsa)
 * 
 * Utilizamos la palabra reservada if()
*/

// Deseamos evaluar sin un número ingresado se encuentra dentro de ciertos límites.
const LIMITE_INF = 40
const LIMITE_SUP = 100
const valorDePrueba = parseInt(prompt('Ingresar número:'))

// Con una condición if(), verificamos si valordePrueba es >= al límite inferior,
// y al mismo tiempo, si es menor o igual al límite superior.
// Si ambas cosas se dan, significa que se encuentra dentro de los límites.
if (valorDePrueba >= LIMITE_INF && valorDePrueba <= LIMITE_SUP) {
    console.log('El número se encuentra ENTRE los límites')
} else {
    // else significa sino, es decir, si valorDePrueba está entre los límites,
    // ejecutará determinadas instrucciones, SINO ejecutará otras.
    // En este caso solo cambiamos el mensaje en la consola.
    console.log('El número se encuentra FUERA de los límites')
}