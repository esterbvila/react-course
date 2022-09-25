
// Operador Condicional Ternari. Manera curta de prendre una decisió.

// Fem un exemple de la manera tradicional:
const activo = true;
let mensaje = '';

if ( activo ) {
  mensaje = 'Activo';
  
}else {
  mensaje = 'Inactivo';
}
console.log( mensaje ) // Activo

  // si faig la negació d'actiu, és a dir, està en falç:
  let mensaje2 = '';

  if ( !activo ) {
    mensaje2 = 'Activo';
    
  }else {
    mensaje2 = 'Inactivo';
  }
  console.log( mensaje2 ) // Inactivo

// Amb l'Operador Ternari. El que vull fer és una assignació a la variable missatge:
const mensaje3 = ( activo ) ? 'Activo' : 'Inactivo'
console.log( mensaje3) // Activo

  // Amb la negació
  const mensaje4 = ( !activo ) ? 'Activo' : 'Inactivo'
  console.log( mensaje4) // Inctivo

// També es pot fer tota la condició elaborada i preguntar si 'activo' és exactament igual a true. Però si és un boleà no fa falta posar aquesta condició
const mensaje5 = ( activo === true ) ? 'Activo' : 'Inactivo'
console.log( mensaje5) // Activo


// Hi haurà ocasions en les que només voldrem executar codi quan la condició es compleixi. En cas contrari no voldrem fer res, només retornar un null. Però innecessariament li estem dient a js que processi l'else d'aquest operador condicional ternari.
const mensaje6 = ( !activo ) ? 'Activo' : null
console.log( mensaje6) // null

// Hi ha una manera millor de fer-ho, és amb un operador condicional ternari:
const mensaje7 = activo  && 'Activo'
console.log( mensaje7) // Activo

  // En negació:
  const mensaje8 = !activo  && 'Activo'
  console.log( mensaje8) // false

// Altres exemples: 
console.log ( true && 1 ) // 1
console.log ( false && 1 ) // false

console.log ( true && 'Hola Mundo' ) // Hola Mundo
console.log ( false && 'Hola Mundo' ) // false
