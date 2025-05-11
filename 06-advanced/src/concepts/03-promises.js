import { heroes } from "../data/heroes";

/**
 * 
 * @param {HTMLDivElement} element   // The element to be used as the container for the environments component.
 */
// export const promiseComponent = ( element ) => {

//     //console.log('promiseComponent');

//     const renderHero = ( hero ) => {
//         element.innerHTML = hero.name; 
//     }

//     const renderError = ( error ) => {
//         element.innerHTML =  `
//             <h1>Error:</h1>
//             <h3>${ error }</h3>
//         `
//     }

//     const id1 = "5d86371f25a058e5b1c8a65e";
//     //findHero( id1 ).then( superHero => renderHero( superHero) );
//     // findHero( id1 ).then( superHero ); Instrucción similar ahorrando los argumentos.
//     findHero( id1 )
//         .then( renderHero )
//         // .catch( error => renderError( error ) ); Ahorramos argumentos
//         .catch( renderError ); 

//     };

// /**
//  * 
//  * @param {String} id 
//  * @returns {Promise}
//  */
// const findHero = ( id ) => {
    
//     return new Promise( ( resolve, reject )=> {
//         //resolve(hero) -> la promesa se cumple y devuelve ese heróe.
//         //reject(...) -> la promesa es rechazada con un mensaje de error.
//         const hero = heroes.find( hero => hero.id === id );

//         if ( hero ) {
//             resolve( hero );
//             return;
//         } 

//         reject(`Hero with id ${ id } not found` );
//     });

// }

//Hasta aquí la version1 de la promise.. Ahora empieza las promisehell
export const promiseComponent = ( element ) => {

    //console.log('promiseComponent');

    const renderHero = ( hero ) => {
        element.innerHTML = hero.name; 
    }

    const renderTwoHeros = ( hero1, hero2 ) => {
        element.innerHTML = `
            <h3>${ hero1.name }</h3>
            <h3>${ hero2.name }</h3>
        `
    }


    const renderError = ( error ) => {
        element.innerHTML =  `
            <h1>Error:</h1>
            <h3>${ error }</h3>
        `
    }

    const id1 = "5d86371f25a058e5b1c8a65e";
    const id2 = "5d86371f97c29d020f1e1f6d";

    Promise.all([
        findHero(id1),
        findHero(id2),
    ])
    .then( ([hero1, hero2])=> renderTwoHeros( hero1, hero2 ) )
    .catch( renderError );

    //! Forma 1
    // findHero( id1 )
    //     .then(( hero1 ) => {
        
        //         findHero( id2 )
        //             .then(( hero2 => {
            //                 renderTwoHeros(hero1, hero2)
            //             }))
            //             .catch( renderError ); 
            //     })
            //     .catch( renderError ); 
    
    //!Forma 2
    // let hero1;
    // findHero(id1)
    //     .then( hero  => {
    //         hero1 = hero;
    //         return findHero(id2);       
    //     }).then( hero2 => {
    //         renderTwoHeros( hero1, hero2 );
    //     })
    //     .catch( renderError );

}



/**
 * 
 * @param {String} id 
 * @returns {Promise}
 */
const findHero = ( id ) => {
    
    return new Promise( ( resolve, reject )=> {
        //resolve(hero) -> la promesa se cumple y devuelve ese heróe.
        //reject(...) -> la promesa es rechazada con un mensaje de error.
        const hero = heroes.find( hero => hero.id === id );

        if ( hero ) {
            resolve( hero );
            return;
        } 

        reject(`Hero with id ${ id } not found` );
    });

}


