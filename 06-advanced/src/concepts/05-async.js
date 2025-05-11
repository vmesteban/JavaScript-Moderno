import { heroes } from "../data/heroes.js";

/**
 * 
 * @param {HTMLDivElement} element   // The element to be used as the container for the environments component.
 */
export const asyncComponent = ( element ) => {

    const id1 = "5d86371f2343e37870b91ef1";
    console.log('Inicio de componente');
    
    findHero( id1 )
        .then( name => element.innerHTML = name )
        .catch( error => element.innerHTML = error )

    console.log('Fin de componente');

}

/**
 * 
 * @param {String} id
 * @returns {Promise<String>}
 */
const findHero = async( id ) => {

    const hero = heroes.find( hero => hero.id === id );
    if ( !hero)
        throw `Hero with id ${ id } not found`;

    return hero.name;

}