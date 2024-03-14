/**
 * Conceptos iniciales de Typescript.
 * 
 * Typescript no es en sí otro lenguaje, sino un superset de Javascript, que agrega
 * control de tipos para un desarrollo más estricto.
 * 
 * https://www.typescriptlang.org/
 */

// Aquí indicamos por ejemplo que K será numérico
// Si intentáramos asignar otro tipo de valor, el sistema se quejaría.
let K: number = 23.3;

// calculate recibe un parámetro numérico y retorna también uno numérico
const calculate = (val: number): number => {
    return val * K;
}

// verify recibe uno numérico pero retorna un booleano
const verify = (val: number): boolean => {
    return val > K;
}

console.log(K);
console.log(calculate(5));
console.log(verify(25));
