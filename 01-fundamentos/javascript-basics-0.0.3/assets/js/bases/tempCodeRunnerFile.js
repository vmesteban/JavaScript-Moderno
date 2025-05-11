
const elMayor = (a, b) => (a > b) ? a : b;

console.log( elMayor(20, 15) );

const tieneMembresia = ( miembro ) => (miembro) ? '2 Dólares' : '10 Dólares';

console.log( tieneMembresia(true) );

const amigo = false;
const amigosArr = [
    'Peter',
    'Tony',
    'Dr. Strange',
    amigo ? 'Thor' : 'Loki',
    // (()=> 'Nick Fury')()
    elMayor(10, 15)
];

console.log( amigosArr );