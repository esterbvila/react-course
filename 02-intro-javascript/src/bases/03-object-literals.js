
// Object Literals

const persona0 = {
};
console.log( persona0 );

// En consola apareixeran aquestes claus -> {} -> Signifiquen que és un objecte i si obrim les claus apareix "[[Prototype]]: Object". Quan es crea qualsevol objecte, variables, element en js, té un prototype que és el seu ADN. Hi ha una serie de propietats que tenen implicits tots els objectes. 

// En general los objetos trabajan con pares de valores. Llaves y valores:
const persona = {
  nombre: 'Tony',
  apellido: 'Stark',
  edad: 45,
  // L'últim parell de valors també porta coma (bones pràctiques)
  direccion: {
    ciudad: 'New York',
    zip: 34343,
    lat: 14.546,
    lng: 34.7987,
  }
};
console.log( persona );
console.log( persona.nombre );

// Perquè a la consola apreixi el nom de la variable, crear un nou objecte que a dins té una propietat que té una propietat anomenada persona i el valor al que apunta és a l'objecte :
console.log( { 
  persona:persona 
} );

// Des de l'ECMA Script 6, quan es té una propietat en un objecte i el valor de la key és el mateix a una variable amb aquesta propietat, es pot posar així:
console.log( { persona } );

// Per veure-ho més facilment en format taula:
console.table( persona );

// Si volem clonar l'objecte i crear una persona 2:
// 𐄂 NO FER MAI així, perquè estem fent la còpia de la referència:
/*const persona2 = persona;
persona2.nombre = "Peter";
console.log( persona )
console.log( persona2 )*/

// ✓ Així SÍ. Crear un nou objecte amb l'operador spread, el qual extreu les propietats de persona i les assigna a persona2:
const persona2 = { ...persona };
persona2.nombre = "Peter";
console.log( persona2 )






