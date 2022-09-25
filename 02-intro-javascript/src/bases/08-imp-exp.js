
// Import, export i funciones comunes d'arrays

// Escriure el nom de la constant a importar 'heroes' i apareix suggerida la paraula, enter.
// Maneres d'importar una variable des d'un altre arxiu .js:
  // 1) A l'altre arxiu escribim 'export' davant de la constant a importar i aqui:
  // import { heroes } from "./data/heroes";

  // 2) A l'altre arxiu escribim 'export default heroes' al final del document, i en aquest:
  //import heroes from './data/heroes';

  // 3) Per importar els 'owners' per separat i a l'hora els heroes, escriure a l'altre arxiu -> 'export const owners = ['DC','Marvel']; export default heroes; . En aquest:
  //import heroes, { owners } from './data/heroes';
  //console.log( owners ) // (2) ['DC', 'Marvel']

  // 4
  // import { heroes, owners } from './data/heroes';
  // console.log( owners ) // (2) ['DC', 'Marvel']

  // 4.1
  import heroes, { owners } from '../data/heroes';
  console.log( owners ) // (2) ['DC', 'Marvel']


// estructura inacabada per importar els objectes de l'array:
const getHeroeById = (id) => {
  return {};
}
console.log( getHeroeById(2) ); // {}

// Com acabar aquesta funció per fer-la funcionar utilitzant 'find'?
const getHeroeById2 = (id) => {
  return heroes.find( ( heroe ) => heroe.id === id );
}
console.log( getHeroeById2(1) ); // {id: 1, name: 'Batman', owner: 'DC'}
// si '( heroe ) => heroe.id === id' és cert, retorna true, sinó retorna false
// 'heroe' és un argument a la callback function


// Per simplificar encara més, podem treure el 'return' i els {}:
export const getHeroeById3 = (id) => heroes.find( ( heroe ) => heroe.id === id );
console.log( getHeroeById3(1) ); // {id: 1, name: 'Batman', owner: 'DC'}


// Tornar els herois(en objectes) que cumpleixi l'owner 'DC', utilitzant 'filter'
export const getHeroesByOwner = ( owner ) => heroes.filter( ( heroe ) => heroe.owner === owner );
console.log( getHeroesByOwner('DC') );



