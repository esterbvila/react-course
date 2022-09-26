
/* -------- 42. DefaultProps  -------- */

import React from 'react';
import ReactDOM from 'react-dom/client';
import { FirstApp } from './FirstApp';

import './styles.css';


ReactDOM.createRoot( document.getElementById('root') ).render(
  <React.StrictMode>
    <FirstApp/> 
  </React.StrictMode>
)


/* -------- 41. PropTypes  -------- */

// Eliminem les props de '<FirstApp />'

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { FirstApp } from './FirstApp';

// import './styles.css';


// ReactDOM.createRoot( document.getElementById('root') ).render(
//   <React.StrictMode>
//     <FirstApp />
//   </React.StrictMode>
// )

// Li afegeixo xifres a la property title per provar si el requeriment 'string' funciona a la property 'title':
// ReactDOM.createRoot( document.getElementById('root') ).render(
//   <React.StrictMode>
//     <FirstApp title={ 123 }/>
//   </React.StrictMode>
// )

// Provo de treure-li qualsevol valor a la property 'title' (si escrivissim '<FirstApp title={ true }/>' seria el mateix):
// ReactDOM.createRoot( document.getElementById('root') ).render(
//   <React.StrictMode>
//     <FirstApp title/> 
//   </React.StrictMode>
// )

// Li escric una string:
// ReactDOM.createRoot( document.getElementById('root') ).render(
//   <React.StrictMode>
//     <FirstApp title="M'agrada la lassagna"/> 
//   </React.StrictMode>
// )

// Al tenir a 'FirstApp.jsx' 'title: PropTypes.string.isRequired', li buido el contingut aquí per forçar un error i que ni es mostri en pantalla:
// ReactDOM.createRoot( document.getElementById('root') ).render(
//   <React.StrictMode>
//     <FirstApp /> 
//   </React.StrictMode>
// )

// Si a 'FirstApp.jsx' -> 'title: PropTypes.string.isRequired,subTitle: PropTypes.number.isRequired' :
// ReactDOM.createRoot( document.getElementById('root') ).render(
//   <React.StrictMode>
//     <FirstApp title="M'agrada la lassagna" /> 
//   </React.StrictMode>
// )

// Si a 'FirstApp.jsx' -> 'title: PropTypes.string.isRequired,subTitle: PropTypes.number.isRequired' :
// ReactDOM.createRoot( document.getElementById('root') ).render(
//   <React.StrictMode>
//     <FirstApp title="M'agrada la lassagna" subTitle={ 123 }/> 
//   </React.StrictMode>
// )






/* -------- 40. Comunicació entre Components - Props  -------- */

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { FirstApp } from './FirstApp';

// import './styles.css';

// Quan crido el component '<FirstApp />' per construïr-lo, li afegeixo 3 propietats amb els seus respectius valors: 'Title','subTitle' i 'paragraph'.

// ReactDOM.createRoot( document.getElementById('root') ).render(
//   <React.StrictMode>
//     <FirstApp title="M'agrada el lemon pie" subTitle="Especialment el de Farga" paragraph="123"/>
//   </React.StrictMode>
// )

// Quan gravem els canvis, al navegador veiem 'M'agrada el lemon pie'. Si mirem a '⚛️ components' i clickem a 'FiRSTapp', veurem que ara a les props estarem rebent el mateix títol i subtítol: {"title": "M'agrada el lemon pie", "subTitle": "Especialment el de Farga"}.

// Si vulguessim sumar-li una xifra a una de les props, ho modificariem així:
// ReactDOM.createRoot( document.getElementById('root') ).render(
//   <React.StrictMode>
//     <FirstApp title="M'agrada el lemon pie" subTitle="Especialment el de Farga" paragraph={ 123 }/>
//   </React.StrictMode>
// )

//* Tot el que afegim després de '<FirstApp' són propietats(props) que estem enviant del component pare al component fill. 







/* -------- 39. Colocar estils de CSS -------- */

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { FirstApp } from './FirstApp';

// Importem els estils globals:
// import './styles.css';


// ReactDOM.createRoot( document.getElementById('root') ).render(
//   <React.StrictMode>
//     <FirstApp />
//   </React.StrictMode>
// )





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