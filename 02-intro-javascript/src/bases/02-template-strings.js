
// Template strings

// Manera convencional:
const nombre = "Ester";
const apellido = "Batllori";
const nombreCompleto = nombre + ' ' + apellido;
console.log( nombreCompleto );

// Amb template strings (` -> això es diu backtick)
const nombreCompleto2 = ` ${ nombre } ${ apellido }`;
console.log( nombreCompleto3 );

// es poden posar salts de linea, expressions, resultats de fucions de js:
const nombreCompleto3 = `
${ nombre }
${ apellido }
${ 1 + 1}
`;
console.log( nombreCompleto3 );

// Amb una funció:
function getSaludo(nombre){
  return 'Hola ' + nombre;
}
console.log(`Este es un texto: ${ getSaludo( nombre ) } `)