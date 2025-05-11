

class Persona { //Clase padre

    static _conteo = 0; // Propiedad estática. Se puede acceder sin instanciar la clase. 
    static get conteo() {
        return Persona._conteo + ' instancias';
    }

    static mensaje() {
        console.log( this.nombre ); // undefined
        console.log('Hola a todos, soy un método estático');
    }


    nombre = '';
    codigo = '';
    frase  = '';
    comida = '';

    constructor( nombre = 'Sin nombre', codigo = 'Sin código', frase = 'Sin frase') { 
    // Constructor
        
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase  = frase;

        Persona._conteo++; // Instancia la propiedad estática. Se puede acceder sin instanciar la clase.
    }

    set setComidaFavorita( comida ) { // Setter modificador de propiedades. 'Solo' recibe un valor.
        // this.comida = comida;
        this.comida = comida.toUpperCase();
    }
    get getComidaFavorita() { // Getter para obtener el valor de una propiedad. 'Solo' devuelve un valor. 
        return `La comida favorita de ${ this.nombre } es ${ this.comida }`;
    }


    quienSoy() {
        console.log(`Soy ${ this.nombre } y mi identidad es ${ this.codigo }`);
    }

    miFrase() {
        this.quienSoy();
        console.log(`${ this.codigo} dice: ${ this.frase }`);
    }

}



const spiderman = new Persona( 'Peter Parker', 'Spiderman', 'Soy tu amigable vecino Spiderman' );
const ironman   = new Persona( 'Tony Stark', 'Ironman', 'Yo soy Ironman' );

spiderman.setComidaFavorita = 'El pie de cereza de la tía May';
// spiderman.comida = 'Duende Verde'; // Propiedad privada

// console.log( spiderman.getComidaFavorita );

// console.log( spiderman );
// Persona._conteo = 2;

console.log('Conteo estático', Persona._conteo );
console.log( Persona.conteo );
Persona.mensaje();

Persona.propiedadExterna = 'Hola Mundo';

console.log( Persona.propiedadExterna );
console.log( Persona );

console.log( spiderman );
