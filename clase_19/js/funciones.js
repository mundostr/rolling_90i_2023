// Constantes y variables
const PI = 3.14;
const lecturas = [3, 5, 22, 7, 6, 15, 2, 3]


/**
 * Funciones:
 * 
 * 1) Una función es un bloque de código reusable.
 * Se lo define por separado del flujo principal de código y puede ser llamado
 * a través de su nombre cada vez que se lo necesite.
 * 
 * 2) Puede recibir parámetros (entre paréntesis) que se convierten en variables locales
 * dentro de la función, para ser utilizadas en las instrucciones del bloque.
 * 
 * 3) Puede retornar valor (con return), es decir, una función puede ejecutar el bloque
 * de código y retornar simplemente, o hacerlo y retornar un resultado
 * que pueda ser asignado a una constante / variable o usado en el flujo principal.
 */
function inicio() {
    console.log('================================');
    console.log(`SISTEMA INICIADO OK (cálculo ${PI})`)
    console.log('================================');
}

function calculo() {
    for (let c = 0; c < lecturas.length; c++) {
        console.log(lecturas[c] * PI);
    }
}

function proceso(v1) {
    console.log(`Resultado: ${v1 * PI}`);
}

function proceso2(v1, v2) {
    return (v1 + v2) * PI;
}


// Flujo principal
// llamamos a la función inicio(), ejecuta los console.log() y retorna
inicio();
// Al retornar, el flujo principal sigue con la llamada a cálculo()
// que de nuevo, ejecuta un ciclo con console.log() y retorna
calculo();

// Ahora llamamos a proceso, que recibe un parámetro (v1 es el nombre
// que hemos decidido darle como variable interna de la función).
// De esta forma podemos reusar la función para muchos casos diferentes,
// cambiando el / los parámetros que usemos en la llamada.
// NO podemos pasar más parámetros de los especificados en la declaración de la función.
proceso(8);
proceso(3);
proceso(16);

// proceso2() está declarado para recibir 2 parámetros.
// No muestra un resultado internamente, procesa un cálculo y devuelve (con return) ese valor.
// Como la función devuelve un valor, podemos asignar la llamada a una constante o variable.
// resultado en este caso no tiene un valor fijo asignado, sino el que devuelva proceso2()
// de acuerdo a los parámetros que se le pasen (los cuales por supuesto, podrían a su vez
// ser variables)
const resultado = proceso2(3, 2);
console.log(resultado);