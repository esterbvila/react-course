
/* -------- 45. useState - Hook  -------- */

// Des de la versió 16.8
// Els hooks són funcions.
// https://es.reactjs.org/docs/hooks-intro.html
// Class base components són més lents que els functional components. Treballem amb functionals components.

// 
import { useState } from 'react';
// Tots els hooks comencen amb 'use'
import PropTypes from 'prop-types';


export const CounterApp = ( { value }) => {

  const [ counter, setCounter ] = useState( 10 )

  const handleAdd = () => {
    setCounter( counter + 1)
  } 

  return (
    <>
      <h1>CounterApp</h1>
      <h2> { counter } </h2>

      <button onClick={ handleAdd }>
        +1
      </button>
    </>
  )
}
CounterApp.propTypes = {
  value : PropTypes.number.isRequired,
}
  // Si vaig a l'apartat de 'components' del navegado i selecciono 'CounterApp' veuré que a l'apartat de hooks hi ha el seguent -> 1 State : 10






/* -------- 44. Event click (Esdeveniments en general)  -------- */

// Esdeveniments soportats per React: https://es.reactjs.org/docs/events.html

// Volem col·locar un botó a baix de l'h2:

// import PropTypes from 'prop-types';

// export const CounterApp = ( { value }) => {
//   return (
//     <>
//       <h1>CounterApp</h1>
//       <h2> { value } </h2>

//       <button onClick={ function() { console.log('+1')} }>
//         +1
//       </button>
//     </>
//   )
// }
// CounterApp.propTypes = {
//   value : PropTypes.number.isRequired,
// }
  // Quan apretem el butó al navegador, a la consola apareix '+1'
  // {} -> expressió de javascript. Hi puc col·locar funcions, d'entre altres.


// L'argument que estem rebent dins la funció de 'onClick' és opcional, no l'hem definint, però podriem:
// export const CounterApp = ( { value }) => {
//   return (
//     <>
//       <h1>CounterApp</h1>
//       <h2> { value } </h2>

//       <button onClick={ function(event) { console.log(event)} }>
//         +1
//       </button>
//     </>
//   )
// }
// CounterApp.propTypes = {
//   value : PropTypes.number.isRequired,
// }
  // Si posem el cursor sobre 'event' veiem que és de tipus 'MouseEvent'. En poques paraules, 'MouseEvent' té la informació de en quines posicions faig click, target, quines tecles estan premudes, coordenades, etc. Depenent de quin element html l'hagi disparat.
  // A la consola apareix informació de l'esdeveniment click: (SyntheticBaseEvent {_reactName: 'onClick', _targetInst: null, type: 'click', nativeEvent: PointerEvent, target: button, …})


// Com el codi anterior és una mica raro i lletj, separarem aquesta funció perquè no quedi dins del jsx, ja que ha de ser fàcil de llegir:
// export const CounterApp = ( { value }) => {

//   function handleAdd(event) {
//      console.log(event)
//   }

//   return (
//     <>
//       <h1>CounterApp</h1>
//       <h2> { value } </h2>

//       <button onClick={ handleAdd }>
//         +1
//       </button>
//     </>
//   )
// }
// CounterApp.propTypes = {
//   value : PropTypes.number.isRequired,
// }
  // Fixa't que li hem posat nom a la funció ja que no pot ser anònima
  // 'onClick={ (event) => handleAdd(event) }'
    // -> Quan hi ha una funció que reb un esdeveniment ('event') i aquest esdeveniment és passat directament a una altra funció ('handleAdd()'). És a dir quan es té un argument que per l'únic que serveix és per ser passat a una funció, es pot obviar enviar la referència a l'esdeveniment i només enviem la referencia a la funció '{ handleAdd }'
  // A la consola: (SyntheticBaseEvent {_reactName: 'onClick', _targetInst: null, type: 'click', nativeEvent: PointerEvent, target: button, …})
  // La funció 'handleAdd()' també es pot escriure així 
    // const handleAdd = (event, newValue) => {
    //   console.log(event)
    // }


// Si necessitessim tornar algún altre valor:
// export const CounterApp = ( { value }) => {

//   function handleAdd(event, newValue) {
//       console.log(newValue)
//   }

//   return (
//     <>
//       <h1>CounterApp</h1>
//       <h2> { value } </h2>

//       <button onClick={ (event) => handleAdd(event, 'hola') }>
//         +1
//       </button>
//     </>
//   )
// }
// CounterApp.propTypes = {
//   value : PropTypes.number.isRequired,
// }
  // Cada vegada que fem click al botó '+1' la consola imprimeix 'hola'
  // Aquesta és la manera normal d'escriure aquest tipus d'accions


// S'aconsella que si la funció (handleAdd) no té cap interacció amb el functional component que l'allotja, es recomana que estigui fora. 
// const handleAdd = (event, newValue) => {
//   console.log(event)
// } // és el mateix que: function handleAdd(event, newValue) {console.log(newValue)}

// export const CounterApp = ( { value }) => {
//   return (
//     <>
//       <h1>CounterApp</h1>
//       <h2> { value } </h2>

//       <button onClick={ handleAdd }>
//         +1
//       </button>
//     </>
//   )
// }
// CounterApp.propTypes = {
//   value : PropTypes.number.isRequired,
// }
// Hi ha una diferencia respecte posar-lo a dins: quan el component CounterApp es tornés a renderitzar, no torna a assignar un espai de memoria a la funció en questió.


// ⚠  Si volem canviar el valor cada vegada que clickem el botó, com ho faig perquè s'actualitzi i s'incrementi 1? ( No acaba de funcionar, pròxima classe s'acaba )
// export const CounterApp = ( { value }) => {

//   const handleAdd = () => {
//     console.log('+1')
//     value = 1000;
//     console.log(value)
//   } 

//   return (
//     <>
//       <h1>CounterApp</h1>
//       <h2> { value } </h2>

//       <button onClick={ handleAdd }>
//         +1
//       </button>
//     </>
//   )
// }
// CounterApp.propTypes = {
//   value : PropTypes.number.isRequired,
// }
  // La funció handleAdd() és dins del component perquè hi interactua.
  // ⚠ Al fer click al botó a la consola s'imprimeix '+1' i '1000' però no canvia el valor de la pantalla a 1000. Això és degut a que per canviar l'estat del component se li ha de dir a React que hi ha hagut un canvi al component i ho ha de re-dibuixar. -> Explicació a la pròxima classe dee hooks <-











/* -------- 43. Tasca - Component CounterApp  -------- */

// 1. Crear un nuevo componente dentro de la carpeta SRC llamado CounterApp
// 2. El CounterApp debe de ser un Functional Component
// 3. El contenido del CounterApp debe de ser:
//     <h1>CounterApp</h1>
//     <h2> { value } </h2>
// 4. Donde "value" es una propiedad enviada desde el padre hacia el componente CounterApp (Debe ser númerica validada con PropTypes)
// 5. Reemplazar en el index.js ó main.jsx el componente de <PrimeraApp /> por el componente <CounterApp /> (no se olviden del value que debe de ser un número)
// Asegúrense de no tener errores ni warnings (Cualquier warning no usado, comentar el código)

// import PropTypes from 'prop-types';

// export const CounterApp = ( { value }) => {
//   return (
//     <>
//       <h1>CounterApp</h1>
//       <h2> { value } </h2>
//     </>
//   )
// }
// CounterApp.propTypes = {
//   value : PropTypes.number.isRequired,
// }
