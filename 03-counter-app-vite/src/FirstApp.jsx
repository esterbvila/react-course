
/* -------- 38. Impresión de Variables en el HTML -------- */

// Quines coses podem imprimir en els nostres components. En altres paraules, com ho fem per imprimir alguna cosa en l'HTML. 

// Per exemple, si jo vull fer una modificació i substituïr algo per una expressió js, utilitzo '{}', col·locant-hi una expressió permesa de js que no sigui un objecte:

// export const FirstApp = () => {
//   return (
//     <>
//       <h1> { 1 + 1 } </h1>
//       <p>Sóc un subtítol</p>
//     </>
//   )
// }


// Expressió permesa utilitzant variable:
// export const FirstApp = () => {
//   const newMessage = 'Ester';
//   return (
//     <>
//       <h1> { newMessage } </h1>
//       <p>Sóc un subtítol</p>
//     </>
//   )
// }

// Norma de React: si no estem canviant el valor de 'newMessage', i tampoc té cap relació amb algún hook, alehores no es recomana que estigui dins del functional component:
// const newMessage = 'Ester';

// export const FirstApp = () => {
//   return (
//     <>
//       <h1> { newMessage } </h1>
//       <p>Sóc un subtítol</p>
//     </>
//   )
// }
// Fer-ho d'aquesta manera té beneficis. Un és que React no re-processarà qualsevol cosa que es trobi dins del component.


// Tipos d'expressions de js permeses:
  // 1) Strings:
  // const newMessage = 'Ester';

  // 2) Números:
  // const newMessage = 123; // renderitza '123'

  // 3) Boleans:
  // const newMessage = true; // no dona error pero no renderitza res. Els valors boleans no s'imprimeixen.

  // 4) Array: 
  // const newMessage = [1,2,3,4,5,6,7,8,9]; // renderitza els números com a elements separats: "1","2", "3", "4"....
  // Això és una cosa molt útil que fa React, que ens permetrà crear molts elements.

// ⚠ Objecte ens dona error:
// const newMessage = {
//   message: 'Hola Mundo',
//   title: 'Ester'
// }
  // ⚠ error : Objects are not valid as a React child (found: object with keys {message, title}). If you meant to render a collection of children, use an array instead.

// export const FirstApp = () => {
//   return (
//     <>
//       <h1> { newMessage } </h1>
//       <p>Sóc un subtítol</p>
//     </>
//   )
// }

// Sol·lució parcial: Podriem afegir la alguna de les 'keys' d'algun parell de valors de l'objecte.
// export const FirstApp = () => {
//   return (
//     <>
//       <h1> { newMessage.title } </h1>
//       <p>Sóc un subtítol</p>
//     </>
//   )
// }
  // Renderitza 'Ester'


// Sol·lució total evaluant l'expressió de react 'JSON.stringify(newMessage)'.
// export const FirstApp = () => {
//   return (
//     <>
//       <code> { JSON.stringify( newMessage ) } </code>
//       <p>Sóc un subtítol</p>
//     </>
//   )
// }
  // retorna : {"message":"Hola Mundo","title":"Ester"}
  // JSON és un objecte que es troba de manera global a js.
  // '.stringify' serialitza l'objecte que li he estem enviant (newMessage) i NO retorna l'objecte en format JSON.


// Tasca: imprimir resultat d'una funció:
  // El meu intent:
  // function imprimir(){
  //   return 'iupi'
    // si en comptes posessim 'console.log('iupi'), s'escriuria a la consola i no a l'html
  // }
  // Profe: 
  // const getResult = () => {
  //   return 4 + 4;
  // }

// export const FirstApp = () => {
//   return (
//     <>
//       <h1>{ imprimir() }</h1>
//       <h1>{ getResult() }</h1>
//       {/* <code> { JSON.stringify( newMessage ) } </code> */}
//       <p>Sóc un subtítol</p>
//     </>
//   )
// }
  // Li estic dient a React que quan comenci a renderitzar l'h1, salti a la funció i agafi el producte de la funció.

// ⚠  Si la funció fos asíncrona, em marcaria un error perquè una promesa és un objecte. I aquest objecte és el que s'intenta imprimir a l'h1.
// const getResult = async() => {
//   return 4 + 4;
// }
// export const FirstApp = () => {
//   return (
//     <>
//       <h1>{ getResult() }</h1>
//       <code> { JSON.stringify( newMessage ) } </code>
//       <p>Sóc un subtítol</p>
//     </>
//   )
// }
  // ⚠ Uncaught Error: Objects are not valid as a React child (found: [object Promise]). If you meant to render a collection of children, use an array instead.

// Ex. més avançat:
const getResult = (a,b) => {
  return a + b;
}
export const FirstApp = () => {
  return (
    <>
      <h1>{ getResult(1,10) }</h1> 
      <p>Sóc un subtítol</p>
    </>
  )
}
  // Apareix un '11' en pantalla


// Una cosa genial que té React és que podem col·locar la funció ('getResult') dins del functional component ('FirstApp') i el resultat és exactament igual que si estigués fora. Però a nivell intern de React el funcionament és diferent. I és que quan el component ('FirstApp'), hagi de redibuixar-se, tornarà a especificar en la memòria l'espai que estem assignant a la funció ('getResult'). Per això es recomana evitar posar-lo dins, tot i que hi ha vegades que serà necessari, per exemple, quan es faci click en un botó i executi certa instrució, o que faci un canvi en l'estat...
// export const FirstApp = () => {

//   const getResult = (a,b) => {
//     return a + b;
//   }

//   return (
//     <>
//       <h1>{ getResult(1,10) }</h1> 
//       <p>Sóc un subtítol</p>
//     </>
//   )
// }
  // En aquest exemple no és de bona pràctica posar la funció dins del component.

// Una norma que podriem seguir és si les funcions no tenen cap mena de dependència del comportament intern del component, van FORA, de manera predeteminada. 
  // Per exemple, si tinc una variable ('name') i la funció 'getResult' necessités la referència de name, 'getResult' podria estar dins.
  // export const FirstApp = () => {

  //   const getResult = (a,b) => {
  //     return a + b + name;
  //   }

  //   const name = 'Ester';

  //   return (
  //     <>
  //       <h1>{ getResult(1,10) }</h1> 
  //       <p>Sóc un subtítol</p>
  //     </>
  //   )
  // }

// ⚠ De manera predeterminada, col·locar les funcions FORA dels components.





  


/* -------- 37. Retornar elementos en el Componente - Fragment -------- */

// import { Fragment } from 'react';

// ⚠ Si afegeixo '<p>Soy un subtitulo</p>' sota '<div>Ester</div>', em donarà l'error ('JSX expressions must have one parent element'):
  // export const FirstApp = () => {
  //   return (
  //     <h1>Ester</h1>
  //     <p>Sóc un subtítol</p>
  //   )
  // }

// Quan es volen retornar diversos elements s'han envolto en un '<div></div>' (node pare):
  // export const FirstApp = () => {
  //   return (
  //     <div>
  //       <h1>Ester</h1>
  //       <p>Sóc un subtítol</p>
  //     </div>
  //   )
  // }
// Un inconvenient és que posar aquest div pot trencar estils. L'altre és que li estem dient a React que processi més del compte. En aquest cas aquest div, no té raó d'existir. 

// Aleshores React va crear una sol·lució per quan es volen tenir dos elements en l'arrel del functional component: la importació de 'Fragment' ->
  // 1) 'import { Fragment } from 'react''. 
  // 2) Substituïm les paraules 'div' per 'Fragment: 
  // export const FirstApp = () => {
  //   return (
  //     <Fragment>
  //       <h1>Ester</h1>
  //       <p>Sóc un subtítol</p>
  //     </Fragment>
  //   )
  // }
    // Podrem veure en l'html que es mostra al navegador que no tenim el div adicional.


// Tot i això, haver de fer una importació cada vegada que passa això fa una mica de pal. Per això React es va inventar una manera més elegant de fer-ho sense importar, amb l'ús del '<>', que és sinònim de 'Fragment':
// export const FirstApp = () => {
//   return (
//     <>
//       <h1>Ester</h1>
//       <p>Sóc un subtítol</p>
//     </>
//   )
// }
  // ⚠ Els elements han d'estar en el mateix nivell jeràrquic

// Definició de Fragment: agrupador d'altres elements jsx, en els quals tenim el nostre node pare i sempre hem de retornar almenys un node pare i dins poden venir els elements que vugluem.








/* -------- 36. Tarea: Crear un nuevo Componente -------- */

// No cal fer la importació de React 'import React from 'react''

// export const FirstApp = () => {
//   return (
//     <div>Ester</div>
//   )
// }
