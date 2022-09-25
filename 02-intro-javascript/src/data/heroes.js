export const heroes = [
  {
      id: 1,
      name: 'Batman',
      owner: 'DC'
  },
  {
      id: 2,
      name: 'Spiderman',
      owner: 'Marvel'
  },
  {
      id: 3,
      name: 'Superman',
      owner: 'DC'
  },
  {
      id: 4,
      name: 'Flash',
      owner: 'DC'
  },
  {
      id: 5,
      name: 'Wolverine',
      owner: 'Marvel'
  },
];

// 1) export const heroes = [...];

// 2) una altra manera és posant al final de l'arxiu -> export default heroes;

// 3) 
//export const owners = ['DC','Marvel'];
//export default heroes;

// 4) eliminant 'export' de 'const heroes' i:
/* const owners = ['DC','Marvel'];
export { 
  heroes, 
  owners 
}; */

// 4.1) especificant un per defecte
const owners = ['DC','Marvel'];
export { 
  heroes as default, 
  owners 
}; 


// 5) una altra manera d'exportar 'heroes'-> export default heroes [...] - no recomenat