
// Desestructuració d'arrays

// Manera NO idonea d'extreure els elements d'un array:
const personajes = ['Goku', 'Vegeta', 'Trunks'];
console.log( personajes[0] ); // Goku
console.log( personajes[1] ); // Vegeta
console.log( personajes[2] ); // Trunks

// Si els volem extreure de manera independent:
// const [] -> significa que faré una desestructuració de l'array | [ p1 ] -> nom de la constant
// Quan volem reanomenar una variable o constant, posar el cursor a sobre la constant que volem renombrar i pressionar fn + F2 
const [ p1 ] = personajes;
console.log( p1 ) // Goku

// Si volem extreure el segon i el tercer element, 'Vegeta" i "Trunks", afegirem una i dues comes abans:
const [ , p2 ] = personajes;
console.log( p2 ) // Vegeta

const [ , , p3 ] = personajes;
console.log( p3 ) // Trunks


// Funció que retorna un array, sense desestructuració:
const retornaArreglo = () =>{
  return ['ABC', 123];
}
const arr = retornaArreglo();
console.log(arr) //(2) ['ABC', 123]

// Funció que retorna un array, amb desestructuració:
const retornaArreglo2 = () =>{
  return ['ABC', 123];
}
const [ letras, numeros ] = retornaArreglo2();
console.log( letras, numeros ) // ABC 123


// Exercici:
const state = ( valor ) => {
  return [ valor, () => { console.log ('Hola Mundo') } ];
}
const arr2 = state( 'pirulita' );
console.log( arr2 ) // (2) ['pirulita', ƒ]
arr2[1](); // Hola Mundo

// Imprimir en la consola els 2 valors de l'array, el primer anomenat 'nombre' i el segon 'stablishNombre', utilitzant la desestructuració:
const [ nombre, stablishNombre ] = state( 'pirulita');
console.log ( nombre ) // pirulita
stablishNombre(); // Hola Mundo





