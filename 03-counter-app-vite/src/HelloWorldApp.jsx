
/* -------- 37. Retornar elementos en el Componente - Fragment -------- */







/* -------- 35. Nuestro Primer Componente -------- */

// import React from 'react';

// Punt d'entrada de l'applicació primer component:
// function App() { 
//   return <h1>Hola Mundo!!</h1>
// }

// 2 maneres d'exportar-lo:
  // a) Afegint 'export' davant
  // export function App() { 
  //   return <h1>Hola Mundo!!</h1>
  // }

  // b) Afegint 'export default App' darrere
  // export function App() { 
  //   return <h1>Hola Mundo!!</h1>
  // }
  // export default App;


// Si escribim el shortcut 'rafc' i pressionem 'tab', ens crea un functional component.

export const HelloWorldApp = () => {
  return (
    <div>Hello World App</div>
  )
}
// Es podria escriure d'una altra manera:
// export const HelloWorldApp = () => <h1>Arrow Function</h1>;
  // però es millor de l'altre manera, així podrem anar omplint la funció de referencies a funcions, a info. que pot canviar el component, etc.
