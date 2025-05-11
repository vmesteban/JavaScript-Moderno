// Valor
let a = 10;
let b = a;
a = 30;

console.log({ a, b });

// Referencia (objeto)
let juan = { nombre: 'Juan' };
let ana  = { ...juan }; // Spread operator
// let ana = juan; // Referencia
// juan.nombre = 'Pedro'; // Cambia el nombre de juan y de ana
// juan = { ...juan }; // Crea una nueva referencia
// juan = { nombre: 'Pedro' }; // Cambia la referencia de juan

ana.nombre = 'Ana';

console.log({ juan, ana });


const cambiaNombre = ({ ...persona }) => {
    persona.nombre = 'Tony';
    return persona;
}

let peter = { nombre: 'Peter' };
let tony  = cambiaNombre( peter );


console.log({ peter, tony });

// Arreglos // 
const frutas = ['Manzana', 'Pera', 'Piña'];

console.time('slice');

const otrasFrutas = frutas.slice();
console.timeEnd('slice');

console.time('spread');
const otrasFrutas2 = [...frutas];
console.timeEnd('spread');


otrasFrutas.push('Mango');

console.table({ frutas, otrasFrutas });