
/* -------- 39. Colocar estils de CSS -------- */

import React from 'react';
import ReactDOM from 'react-dom/client';
import { FirstApp } from './FirstApp';
import { HelloWorldApp } from './HelloWorldApp';

// Importem els estils globals:
import './styles.css';


ReactDOM.createRoot( document.getElementById('root') ).render(
  <React.StrictMode>
    <HelloWorldApp />
    <FirstApp />
  </React.StrictMode>
)





/* -------- 36. Tarea: Crear un nuevo Componente -------- */

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { FirstApp } from './FirstApp';
// import { HelloWorldApp } from './HelloWorldApp';

// ReactDOM.createRoot( document.getElementById('root') ).render(
//   <React.StrictMode>
//     <HelloWorldApp />
//     <FirstApp />
//   </React.StrictMode>
// )




/* -------- 35. Nuestro Primer Componente -------- */

// import React from 'react';
// import ReactDOM from 'react-dom/client';

// Dues maneres d'importar un component, depenent de com l'exportem:
  // a)  Afegint 'export' davant:
  // import { App } from './HelloWorldApp';

  // b) Afegint 'export default App' darrere
  // import App from './HelloWorldApp';
    // Com estem exportant el component per defecte, TOT el que s'està exportant és el nostre component, no pot ser rés més. Per tant se li posa el nom que es vol i no es posa entre {}. Per exemple, en comptes de 'App' podriem escriure 'import HelloWorldApp from './HelloWorldApp'' i funcionaria igual. A la renderització també li canviariem el nom.

// Donat que li hem canviat el nom del component, fem un altre import:
// import { HelloWorldApp } from './HelloWorldApp';

// Renderització:
// ReactDOM.createRoot( document.getElementById('root') ).render(
//   <React.StrictMode>
//     <HelloWorldApp />
//   </React.StrictMode>
// )

// Algo propi de Vite és la seva manera de canviar moduls en calent, super ràpid i útil.





/* -------- 34. Hola Mundo -------- */

// import React from 'react';
// import ReactDOM from 'react-dom/client'; 

// Aquests elements els necessito per renderitzar la meva aplicació. 
// Què renderitzaré? Tot en React comença amb un component, és el punt d'entrada de l'applicació.
// Aquests components no són més que una funció. Per això se'ls anomena functional components.
// També es treballa amb classes, tot i que no s'aconsella.

// Normalment el component no està en aquest arxiu, però ara l'escrivim aquí per fer una demostració simple:
// El primer component és conegut com a 'App'
// function App() { 
//   return <h1>Hola Mundo!</h1>
// }
// Aquest codi és una manera senzilla i elegant d'escriure 'document.createElement...'. 

// Per renderitzar-la: 
// ReactDOM.createRoot( document.getElementById('root') ).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// )
// Tots els noms dels functional components van capitalitzades amb Upper Camel Case o Pascal Case.


// ⚠ Tot aquest codi crea un Warning: You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it.
// ⚠ Vite està fent el Hot Replacement de tot això. Aquest codi no és una bona pràctica, no s'aconsella. Però això és una simple demostració. Perquè no sortís l'error hauriem de traslladar el component a un altre arxiu.