const lecturas = [9, -2, -1, 15, 16, 16, 3, -3, 5]

// Calcular sumatoria, promedio, mayor y menor en el array.

let sumatoria = 0;
let mayor = lecturas[0];
let menor = lecturas[0];
let repeticiones = 0;

for (c = 0; c < lecturas.length; c++) {
    // sumatoria es un ACUMULADOR
    sumatoria = sumatoria + lecturas[c]; // sumatoria += lecturas[c];
    
    if (lecturas[c] > mayor) {
        mayor = lecturas[c];
    } else if (lecturas[c] === mayor) {
        repeticiones++;
    } else if (lecturas[c] < menor) {
        menor = lecturas[c];
    }
}

const promedio = sumatoria / lecturas.length;

console.log(sumatoria);
console.log(promedio);
console.log(mayor);
console.log(menor);
console.log(`El nro mayor se repite ${repeticiones} veces`)