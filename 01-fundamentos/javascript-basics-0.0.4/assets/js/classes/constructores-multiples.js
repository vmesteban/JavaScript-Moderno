class Persona {

    static porObjeto({ nombre, apellido, pais }) { // Método estático pasado como argumento un objeto
        return new Persona( nombre, apellido, pais );
    }

    constructor( nombre, apellido, pais ) {
        this.nombre   = nombre;
        this.apellido = apellido;
        this.pais     = pais;
    }

    getInfo() {
        console.log(`info: ${ this.nombre }, ${ this.apellido }, ${ this.pais }`);
    }
}

const nombre1   = 'Melissa',
      apellido1 = 'Flores',
      pais1     = 'Honduras';

const persona1 = new Persona( nombre1, apellido1, pais1 );
persona1.getInfo();

const fher = {
    nombre:   'Fernando',
    apellido: 'Herrera',
    pais:     'Costa Rica'
}      

const persona2 = Persona.porObjeto( fher );
persona2.getInfo();
