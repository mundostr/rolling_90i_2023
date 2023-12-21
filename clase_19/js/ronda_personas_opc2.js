/**
RONDA DE PERSONAS:

1) Una ronda de 10 personas debe contar hasta 20, comenzando en sentido horario
y turnándose de 1 en 1 (la 1er persona dice 1, la 2da dice 2, y así sucesivamente).

2) Cada vez que la cuenta llega a un valor perfectamente divisible por 8,
se debe invertir el sentido de la ronda y continuar el conteo.

3) Cada vez que la cuenta llega a un valor perfectamente divisible por 11,
se debe saltar una persona y continuar el conteo.

Intenten integrar el uso de los elementos básicos vistos,
para poder realizar este conteo bajo las condiciones que se piden.
No importa si no logran 100% de funcionalidad, pero por favor inténtenlo.
*/

// Solución opción 2

const TOTAL_PERSONAS = 10;
const LIMITE_CUENTA = 25;

let personaActual = 0;
let direccion = 1;

for (let cuenta = 1; cuenta <= LIMITE_CUENTA; cuenta++) {
  console.log(`Persona ${personaActual + 1} dice: ${cuenta}`);

  if (cuenta % 8 === 0) direccion *= -1;

  if (cuenta % 11 === 0) {
    personaActual = (personaActual + 2 * direccion + TOTAL_PERSONAS) % TOTAL_PERSONAS;
  } else {
    personaActual = (personaActual + direccion + TOTAL_PERSONAS) % TOTAL_PERSONAS;
  }
}
