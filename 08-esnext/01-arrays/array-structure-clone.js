
const superHeroes = [
    {
        id: 1,
        name: 'Spiderman'
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

//const superHeroesCopy = [...superHeroes]; -> no usar. Se pasan datos por referencia.
const superHeroesCopy = structuredClone(superHeroes); 

superHeroesCopy[0].name = 'Green Lantern';

console.table(superHeroes);
console.table(superHeroesCopy);