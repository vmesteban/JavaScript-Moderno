
const state = [
    {
        id: 1,
        name: 'Batman'
    },
    {
        id: 2,
        name: 'Superman'
    },
    {
        id: 3,
        name: 'Flash'
    },
    {
        id: 4,
        name: 'Aquaman'
    },
];

const index = 1;
const newName = 'Green Lantern';


// const newState = state.map( (hero, i) => {
//     if ( i=== index){
//         hero.name = newName;
//     }
    
//     return {...hero};
    
// });

const newState = state.with(index, {
    //id: 1000, 
    
    //...state[index], equivalentes
    ...state.at(index),

    name: newName
}); 


state[0].name = 'Volcan Negro';

console.table(newState);

console.log('El último elemento: ', state.at(-1));


