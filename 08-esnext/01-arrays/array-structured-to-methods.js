const heroes = ['Batman','Superman','Flash','Aquaman',];
//const heroesCopy = ['Batman','Superman','Flash','Aquaman',];
//const sortedHeroes = heroes.toSorted();
//heroes.sort();

console.table(heroes);
//const deleteHero = heroes.splice(0, 2, 'Green Lantern');
const deleteHeros = heroes.toSpliced(0, 2, 'Green Lantern')


//heroes.reverse();
//const reversedHeroes = heroes.toReversed();

console.table(heroes);
//console.table(heroesCopy);
//console.table(sortedHeroes);
//console.table(reversedHeroes);
console.table(deleteHeros);

