
// function crearPersona( nombre, apellido ) {
//     return {
//         nombre: nombre, // Si el nombre de la propiedad es igual al nombre de la variable, se puede omitir
//         apellido: apellido   
//     }
//     return { nombre,apellido } 
// }
const crearPersona = ( nombre, apellido ) => ({ nombre,apellido });



const persona = crearPersona( 'Fernando', 'Herrera' );
console.log( persona );


function imprimeArgumentos() {
    console.log( arguments );
}

imprimeArgumentos(10, true, false, 'Fernando', 'Hola');

const imprimeArgumentos2 = ( edad, ...args ) => { // Parametro rest
    // console.log( args );
    console.log({ edad, args });
    return args;
}

imprimeArgumentos2(10, true, false, 'Fernando', 'Hola');

const [ casado, vivo, nombre, saludo ] = imprimeArgumentos2(10, true, false, 'Fernando', 'Hola');
console.log({ casado, vivo, nombre, saludo });


const { apellido: nuevoApellido } = crearPersona( 'Fernando', 'Herrera' );
console.log({ nuevoApellido });


const tony = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
};

// const imprimePropiedades = ( personaje ) => {

//     console.log( 'nombre',personaje.nombre );
//     console.log( 'codeName',personaje.codeName );
//     console.log( 'vivo',personaje.vivo );
//     console.log( 'edad',personaje.edad );
//     console.log( 'trajes',personaje.trajes );

// }
const imprimePropiedades = ({ nombre, codeName, vivo, edad = 15, trajes }) => {

    console.log({nombre});
    console.log({codeName});
    console.log({vivo});
    console.log({edad});
    console.log({trajes});
}

imprimePropiedades( tony );