
// Funciones

// 𐄂 NO RECOMENAT fer funcions així, perquè és fàcil que accidentament es creui amb una altra variable.
function saludar( nombre ) {
  return `Hola, ${ nombre }`;
}
console.log( saludar ('Goku'))

// 𐄂 Ex. afegint una variable que es diu igual que la funció. La consola no dona cap error i retorna "30".
function saludar2( nombre ) {
  return `Hola, ${ nombre }`;
}
saludar2 = 30;
console.log( saludar2 )

// ✓ Si treballem amb constants i ha una altra variable que es diu igual, el codi ja no funciona i surt un warning, la consola ens avisa. MANERA CORRECTA:
const saludar3 = function ( nombre ) {
  return `Hola, ${ nombre }`;
}
//saludar3 = 20;
console.log( saludar3 )

// ARROW FUNCTIONS
const saludar4 = ( nombre ) => {
  return `Hola, ${ nombre }`;
}
console.log( saludar4 );
console.log( saludar4('Ester') );

// ✓ Si tot el que fa una funció és tornar un return,també es pot simplificar així:
const saludar5 = ( nombre ) => `Hola, ${ nombre }`;
console.log( saludar5('Judit') );

// ✓ Sense argument: 
const saludar6 = () => `Hola Mundo`;
console.log( saludar6() );

// ✓
const getUser = () => {
  return{
    uid: 'ABC123',
    username: 'Papi'
  }
}
console.log( getUser() )

// 𐄂 Seguint amb la mateixa lògica que la funció saludar5, es podria simplificar de la mateixa manera, no? Doncs no, NO és correcte:
/* const getUser2 = () => 
  {
    uid: 'ABC123',
    username: 'Papi'
  }
console.log( getUser2() ) */

// ✓ Aleshores,com li puc dir a js que el que hi ha entre claudators {} no és el cos de la funció, sinó que vull tornar un objecte? Posant-ho tot entre parentesi (). Aquests parentesis signifiquen que estic tornant aquest objecte de manera implícita:
const getUser3 = () => 
  ({
    uid: 'ABC123',
    username: 'Papi'
  })
console.log( getUser3() )

// ✓ Una altra manera:
const getUser4 = () => 
  ({
    uid: 'ABC123',
    username: 'Papi'
  })
const user = getUser4();
console.log( user )

// TAREA. Transformen esta función a una función de Flecha que tiene que retornar un objecto implícito:
function getUsuarioActivo( nombre ) {
  return {
    uid: 'ABC5676',
    username : nombre,
  }
};
const usuarioActivo = getUsuarioActivo('Ester');
console.log( usuarioActivo );

// ✓ Resultado:
const getUsuarioActivo2 = ( nombre ) => 
  ({
    uid: 'ABC5676',
    username : nombre,
  });
const usuarioActivo2 = getUsuarioActivo2('Ester');
console.log( usuarioActivo2 );










