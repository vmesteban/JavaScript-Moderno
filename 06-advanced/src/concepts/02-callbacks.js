import { heroes } from "../data/heroes";

/***
 * @param {HTMLDivElement} element   - The element to be used as the container for the environments component.
 */
// export const callbacksComponent = ( element ) => {

//     const id = '5d86371fd55e2e2a30fe1ccb1';
//     findHero( id, (error, hero) => {
//         //element.innerHTML = hero?.name || 'No hay heroe';
//         if ( error ) { // Manejo de errores
//             element.innerHTML = error;
//             return;
//         }
//         element.innerHTML = hero.name;
//     } );

//     element.innerHTML = `${ hero1.name }`;

// }

//callback es una función que se recibe como argumento y que invoca a otra función
/**
* @param {String} id
* @param { (error?: String|Null, hero: Object)=> void } callback
*/
const findHero = ( id, callback) => {  
    const hero = heroes.find( hero => hero.id === id );
    if ( !hero ) {  // Manejo de errores. 
        callback(`Hero with id ${ id } not found.`);
        return; //undefined;
    };

    callback( null, hero );

}
// Hasta aquí la version1 del callback
// Empieza la callbackhell 
export const callbacksComponent = ( element ) => {

    const id1 = '5d86371fd55e2e2a30fe1ccb1';
    const id2 = '5d86371fd55e2e2a30fe1ccb2';

    findHero( id1, (error, hero1) => {
        
        if ( error ) { 
            element.innerHTML = error;
            return;
        }

        findHero( id2, (error, hero2 ) => {
            if ( error ) { 
                element.innerHTML = error;
                return;
            }

            element.innerHTML = `${ hero1.name } / ${ hero2.name }`
            
        })

    });

}
