
import React from 'react';
import ReactDOM from 'react-dom/client';

// Aquests elements els necessito per renderitzar la meva aplicació. 
// Què renderitzaré? Tot en React comença amb un component, és el punt d'entrada de l'applicació.
// Aquests components no són més que una funció. Per això se'ls anomena functional components.
// També es treballa amb classes, tot i que no s'aconsella.

// Normalment el component no està en aquest arxiu, però ara l'escrivim aquí per fer una demostració simple:
function App() { 
  return <h1>Hola Mundo!</h1>
}
// Aquest codi és una manera senzilla i elegant d'escriure 'document.createElement...'. 

// Per renderitzar-la: 
ReactDOM.createRoot( document.getElementById('root') ).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
// Tots els noms dels functional components van capitalitzades amb Upper Camel Case o Pascal Case.


// ⚠ Tot aquest codi crea un Warning: You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it.
// ⚠ Vite està fent el Hot Replacement de tot això. Aquest codi no és una bona pràctica, no s'aconsella. Però això és una simple demostració. Perquè no sortís l'error hauriem de traslladar el component a un altre arxiu.

