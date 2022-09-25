
// Tipus de variables: const i let

// 𐄂 NO utilitzar MAI VAR ja que es poden declarar 2 variables var amb el mateix nom sense que doni error. És degut a que té global scope. Exemple:  
var greeter = "hey hi";
var times = 4;
if (times > 3) {
    var greeter = "iuhu"
    var greeter = "say Hello instead"; 
}
console.log(greeter) // "say Hello instead"

// 𐄂 En canvi les variables LET i CON, NO poden ser declarades més d'una vegada amb el mateix nom en el mateix scope, donen error :
/* let greeter2 = "hey hi";
let times2 = 4;
if (times2 > 3) {
    let greeter2 = "iuhu"
    let greeter2 = "say Hello instead"; 
}
console.log(greeter2) */ // ERROR: Identifier 'greeter2' has already been declared

/* const greeter2 = "hey hi";
const times2 = 4;
if (times2 > 3) {
    const greeter2 = "iuhu"
    const greeter2 = "say Hello instead"; 
}
console.log(greeter2) */ // ERROR: Identifier 'greeter2' has already been declared

// ✓ En scopes diferents SÍ que es pot:
let greeter3 = "hey hi";
let times3 = 4;
if (times3 > 3) {
    let greeter3 = "say Hello instead"; 
}
console.log(greeter3) // "hey hi"

const greeter4 = "hey hi";
const times4 = 4;
if (times4 > 3) {
    const greeter4 = "say Hello instead"; 
}
console.log(greeter4) // "hey hi"

// ✓ LET permet canviar el valor d'una variable:
let valorDado = 5;
valorDado = 4;
// 𐄂 let valorDado = 6

// 𐄂 CONST NO permet canviar el valor d'una variable:
/* const valorDado2 = 5;
valorDado2 = 4; */
// 𐄂 Uncaught TypeError: Assignment to constant variable

// Cada declaració CONST ha de ser inicialitzada quan es declara. 
const greeting = {
  message: "say Hi",
  times: 4
}

// Els objectes declarats amb CONST, tot i que tampoc podem canviar-los el valor, sí que podem canviar-los les propietats:
/*greeting = {
  words: "Hello",
  number: "five"
} */ // 𐄂 error: Assignment to constant variable.

greeting.message = "say Hello instead"; // ✓

// 'const nombre' i 'let valorDado' només existiran dins la funció "if" ja que són blocked scoped, per tant, no passarà res si tenen el mateix nom que altres variables fora la funció. Per això, si es fa un console.log fora la funció cridant aquestes variables, tornaran resultats d'altres variables globals:
const nombre = 'Fernando';
let valorDado2 = 5;
if ( true ) {
  const nombre = "Peter";
  let valorDado2 = 6;
  console.log(nombre) // Peter
  console.log(valorDado2) // 6
}
console.log(valorDado2) // 5
console.log(nombre) // 30 Fernando

