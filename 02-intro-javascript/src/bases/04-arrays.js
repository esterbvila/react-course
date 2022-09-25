
// Arrays

// Un array és una col·lecció d'informació que es troba dins d'una mateixa variable
// NO es recomana iniciar un array així
const arreglo = new Array();
// A no ser que es vulgui crear un array amb valors definits a l'iniciar. Per exemple, amb 100 posicions buides. 
const arreglo2 = new Array(100);
// No vol dir que més tard no el pugui seguir expandint:
arreglo2.push(1);

// Manera NORMAL d'iniciar un array:
const arreglo3 = [];
// En la consola ->[]-> significa que és un array
// No es recomana utilitzar el push per insertar valors
arreglo3.push(1);
arreglo3.push(2);
arreglo3.push(3);
arreglo3.push(4);

// S'inicialitza directament així:
const arreglo4 = [1,2,3,4];

// Com afegir un nou valor sense utilitzar el push?
let arreglo5 = arreglo4;
arreglo5.push( 5 );

// Per afegir un nou valor sense utilitzar el push, utilitzar  l'operador spread. Spread extreu l'info. d'arreglo6 i col·loca individualment cadascún dels elements d'aquest array a arreglo7.
const arreglo6 = [1,2,3,4];
let arreglo7 = [ ...arreglo6, 5 ];
console.log( arreglo7 )

// Això dona error: "undefined is not a function". Map espera una funció. Array.prototype.map() crea un nou array....:
//const arreglo8 = arreglo7.map();
//console.log( arreglo8 )


// La function de dins és coneguda com a Callback, una funció que s'executarà dins del mètode map. La funció s'executarà per cada un dels elements d'arreglo9.
const arreglo9 = [1,2,3,4];
const arreglo10 = arreglo9.map( function(numero) {
  //si una funció no té un return explicit, retorna undefined
  return numero * 2
})

console.log(arreglo10)












