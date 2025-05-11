class Persona { //Clase padre

    static _conteo = 0; // Propiedad estática. Se puede acceder sin instanciar la clase.
    static get conteo() {
        return Persona._conteo + ' instancias';
    }

    static mensaje() {
        console.log( this.nombre ); // undefined
        console.log('Hola a todos, soy un método stático');
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

        Persona._conteo++;
    }

    set setComidaFavorita( comida ) {
        this.comida = comida.toUpperCase();
    }
    get getComidaFavorita() {
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

class Heroe extends Persona{  // Clase hija de Persona con la palabra 'extends'
    
    clan = 'sin clan';

    constructor(nombre, codigo, frase) {
        super(nombre, codigo, frase); // Llama al constructor de la clase padre
        // 'super' es la palabra reservada para llamar al constructor de la clase padre. 

        this.clan = 'Los Avengers';
    }

    quienSoy() {
        console.log(`Soy ${ this.nombre }, ${ this.clan }`);
        super.quienSoy(); // Llama al método de la clase padre
    }

}


const spiderman = new Heroe( 'Peter Parker', 'Spiderman', 'Soy tu amigable vecino Spiderman' );


console.log( spiderman );
spiderman.quienSoy();





