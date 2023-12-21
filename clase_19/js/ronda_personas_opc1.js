/**
RONDA DE PERSONAS:

1) Una ronda de 10 personas debe contar hasta 100, comenzando en sentido horario
y turnándose de 1 en 1 (la 1er persona dice 1, la 2da dice 2, y así sucesivamente).

2) Cada vez que la cuenta llega a un valor perfectamente divisible por 8,
se debe invertir el sentido de la ronda y continuar el conteo.

3) Cada vez que la cuenta llega a un valor perfectamente divisible por 11,
se debe saltar una persona y continuar el conteo.

Intenten integrar el uso de los elementos básicos vistos,
para poder realizar este conteo bajo las condiciones que se piden.
No importa si no logran 100% de funcionalidad, pero por favor inténtenlo.
*/

// Solución opción 1

// Definimos constantes para mejor organización de código
// De esa forma, podremos cambiar las constantes para la cantidad de personas
// y cuenta que necesitemos, sin tocar la lógica debajo

const CTD_PERSONAS = 10;
const LIMITE_CTA = 25;

let persona = 0;
// Utilizamos una variable booleana para indicar si estamos contando horario o antihorario
// true = horario, false = antihorario
let sentido_horario = true;

// Aprovechamos la propia variable auxiliar del ciclo para llevar la cuenta
for (let cuenta = 1; cuenta <= LIMITE_CTA; cuenta++) {
    if (sentido_horario === true) {
        // Si se está contando en sentido horario
        // se incrementa persona mientras no llegue al límite de cantidad,
        // sino se resetea a 1
        if (persona !== CTD_PERSONAS) {
            persona++; // es lo mismo que escribir persona = persona + 1
        } else {
            persona = 1;
        }
    } else {
        // Si se está contando en sentido antihorario
        // se decrementa persona mientras no llegue a 1,
        // sino se resetea al límite de cantidad
        if (persona !== 1) {
            persona--; // es lo mismos que escribir persona = persona - 1
        } else {
            persona = CTD_PERSONAS;
        }
    }

    // Si la cuenta es perfectamente divisible por 8, se invierte la variable
    if (cuenta % 8 === 0) {
        sentido_horario = !sentido_horario; // ! operador not, negación
    }

    console.log(`Persona ${persona} dice ${cuenta}`);
    
    if (cuenta % 11 === 0) {
        if (sentido_horario === true) {
            persona++;
        } else {
            persona--;
        }
        
        // Operador ternario (alternativa al if tradicional)
        // sentido_horario ? persona++: persona--;
    }
}