
/* -------- 42. DefaultProps  -------- */

// Si a les properties els volem definir valors per defecte, és a dir, que quan no se'ls passi cap valor en puguin tenir sempre un disponible:
 // Manera 1 (Definint-los a dalt):  
  import PropTypes from 'prop-types';

  // export const FirstApp = ({
  //   title ,
  //     subTitle = 'La terra explota!'
  //   }) => {
  //   return (
  //     <>
  //       <h1>{ title }</h1> 
  //       <p>{ subTitle }</p>
  //     </>
  //   )
  // }
  // FirstApp.propTypes = {
  //   title: PropTypes.string.isRequired,
  //   subTitle: PropTypes.number,
  // }
    // A la pantalla visualitzem 'La terra explota!', i a la consola (Warning: Failed prop type: The prop `title` is marked as required in `FirstApp`, but its value is `undefined`.at FirstApp)
    // Si hi ha moltes properties, definir-les totes a dalt pot resultar incòmode

  // Manera 2 (Definint-los a baix).
  export const FirstApp = ({ title , subTitle, name }) => {
    return (
      <>
        <h1>{ title }</h1> 
        <p>{ subTitle }</p>
        <p>{ name }</p>
      </>
    )
  }
  FirstApp.propTypes = {
    subTitle: PropTypes.string,
    title: PropTypes.string.isRequired,
  }

  FirstApp.defaultProps = {
    name : 'Ester ',
    subTitle : 'No hi ha subtítol',
    title : 'No hi ha títol',
  }
    // En la pantalla es mostra 'No hi ha títol', 'No hi ha subtítol', 'Ester'.
    // Habitualment es situa la secció '.defaultProps...' al final, després del component.
// Quan tinguem un Warning de prop type, a '⚛️ components', a la dreta del component afectat pel warning ens sortirà una alerta 𐄂.

// Recomana ordenar ascendentment -> Cmnd + Shift + p -> 'Sort Lines Ascending'







/* -------- 41. PropTypes  -------- */

// import PropTypes from 'prop-types';

// Parlarem d'una característica super poderosa que ens ofereixen els PropTypes, és a dir, les tipologies de les propietats. Si estem treballant amb CRA, el que utilitzarem ja ve importat per defecte, amb Vite, no.

// Per a què em serveixen les PropTypes? Per definir-los la tipologia a les properties

// Volem que qualsevol altre persona que utilitzi el component estableixi el títol obligatoriament, i si no ho fa aparegui un warning per saber que s'està utilitzant el component de manera inadecuada:

// (no tenim afegit 'title' a les properties del pare '<FristApp />')

  // 𐄂 Opció 1 SENSE PropTypes:
  // export const FirstApp = ({ title , subTitle }) => {
  //   if ( !title ) {
  //     throw new Error('El title no existeix'); // Uncaught Error: El title no existeix
  //   }
  //   return (
  //     <>
  //       <h1>{ title }</h1> 
  //       <p>{ subTitle }</p>
  //     </>
  //   )
  // }
    // Hi ha diversos inconvenients de fer-ho així. El problema és que el codi (if...}) està dins del component, és dificil de llegit i incrementa la complexitat del component innecessariament. 

  // ✓ Opció 2 AMB PropTypes:
  // export const FirstApp = ({ title , subTitle }) => {
  //   return (
  //     <>
  //       <h1>{ title }</h1> 
  //       <p>{ subTitle }</p>
  //     </>
  //   )
  // }
  // FirstApp.propTypes = {
  //   title: PropTypes.string
  // }
    // Les importem amb "import PropTypes from 'prop-types'"
    // Obrim la terminal i les instalem amb: npm install prop-types
    // Com defineixo les properties? 'FirstApp.prototype..'
    // Establiré com ha condició que el 'title' ha de ser un string. Escriuré 'PropTypes' amb 'P' majúscula aquesta vegada perqué m'estaré referint al paquet.
    // Guardo als canvis i al navegador no apareix cap error, tot sembla que funciona. Perquè passa si se suposa que el title és undefined o null? 

    // si a 'main.jsx' li afegeixo  '<FirstApp title={ 123 }/>', a la pantalla apareix '123' però a la consola em dona error: (Warning: Failed prop type: Invalid prop `title` of type `number` supplied to `FirstApp`, expected `string`. at FirstApp)

    // si a 'main.jsx' li afegeixo  '<FirstApp title/>', la consola em dona un error similar : (Warning: Failed prop type: Invalid prop `title` of type `boolean` supplied to `FirstApp`, expected `string`.at FirstApp). Seria el mateix que si escrivissim '<FirstApp title={ true }/>'.

    // si a 'main.jsx' li afegeixo ' <FirstApp title="M'agrada la lassagna"/>',ja no em dona error.


// Puc dir-li que a part de ser un string, ha de ser obligatori, i que si no es dona, NO es mostri en pantalla i la consola mostri un error. Això ho farem amb '.isRequired' :
// export const FirstApp = ({ title , subTitle }) => {
//   return (
//     <>
//       <h1>{ title }</h1> 
//       <p>{ subTitle }</p>
//     </>
//   )
// }
// FirstApp.propTypes = {
//   title: PropTypes.string.isRequired,
// }
  // com '<FirstApp />' està buit, mostrarà un error: (Warning: Failed prop type: The prop `title` is marked as required in `FirstApp`, but its value is `undefined`.at FirstApp)


// Si volem tipar també 'subTitle':
// export const FirstApp = ({ title , subTitle }) => {
//   return (
//     <>
//       <h1>{ title }</h1> 
//       <p>{ subTitle }</p>
//     </>
//   )
// }
// FirstApp.propTypes = {
//   title: PropTypes.string.isRequired,
//   subTitle: PropTypes.number.isRequired,
// }
  // Si a 'main.jsx' tenim '<FirstApp title="M'agrada la lassagna" />' a la consola ens dona un warning (Warning: Failed prop type: The prop `subTitle` is marked as required in `FirstApp`, but its value is `undefined`.at FirstApp) i a la pantalla es veurà 'M'agrada la lassagna'.
  // Si a 'main.jsx' tenim '<FirstApp title="M'agrada la lassagna" subTitle={ 123 }/> ' a la pantalla es veurà 'M'agrada la lassagna' i '123'.









/* -------- 40. Comunicación entre Componentes - Props  -------- */

// Parlarem sobre les properties que els functional components reben. Normalment les 'props' es desestructuren. L'important es que rebem les props (que és un objecte). Aquest objecte pot tenir molta info. , depenent del context. Entenem el context quan tinguem una app que utilitzi un Router i pot ser que el Router envi funcions a aquestes properties, o pot ser que li envi certa informació basada en el context on estigui funcionant el component.

// Si imprimim aquest objecte, veurem que a la consola ens apareix un objecte '{}'.
// export const FirstApp = ( props ) => {

//   console.log(props); // {}

//   return (
//     <>
//       <h1>Ester</h1> 
//       <p>Sóc un subtítol</p>
//     </>
//   )
// }

// * Aquestes props em permeten establir un canal de comunicació entre el pare ('<React.StrictMode></React.StrictMode>' de 'main.jsx') del meu component 'FirstApp' i el component 'FirstApp' en sí.


// Què podem fer amb les properties?
// Ex. 
  // Imaginem que de les properties estic esperant el title. 
  // Al escriure '{ props. title }' em renderitza l'h1 buit. És com si en comptes de 'props. title' hi tingués escrit un 'undefined'.
// export const FirstApp = ( props ) => {

//   console.log(props); // {}

//   return (
//     <>
//       <h1>{ props. title }</h1> 
//       <p>Sóc un subtítol</p>
//     </>
//   )
// }

// Anant al navegador i a '⚛️ components' (dev. tool de react), veurem el nom del component 'FirstApp'. Aquí es visualitza tot l'arbre de components que tenim a l'app, més conegut com a context. Podem fer click i ens apareixen les props amb un input 'new entry:""'. Escriurem 'title' i a continuació un títol qualsevol, per exemple, 'M'agrada la xocolata'. Pressionem enter. Ens apareixerà 'M'agrada la xocolata' a la pantalla.

// És molt extrany utilitzar les props com ho hem fet en el codi anterior, normalment es desestructuren els arguments que li estem enviant a la funció i li extreiem el que a nosalres ens interessa. En aquest cas, el 'title'. Al extreure el 'title' d'aquestes props, no cal que posem 'props.title':
// export const FirstApp = ( { title } ) => {

//   return (
//     <>
//       <h1>{ title }</h1> 
//       <p>Sóc un subtítol</p>
//     </>
//   )
// }


// Si és recarrega el navegador web es perd la informació. 
// Com ho podem fer per poder-li enviar, des del component pare, la informació que 'FirstApp' necessita?

  // 𐄂 1) Opció d'enviar-li un valor per defecte:
  // export const FirstApp = ( { title = "M'agrada el salmó" } ) => {

  //   return (
  //     <>
  //       <h1>{ title }</h1> 
  //       <p>Sóc un subtítol</p>
  //     </>
  //   )
  // }
    // Aquesta instrucció li diu que si el 'title' ve undefined, null o qualsevol altre valor null, utilitzi el missatge "M'agrada el salmó". No acaba de ser correcte, perquè jo no li vull enviar un valor per defecte, sinó establir-li un valor que SEMPRE el rebi.

  // ✓ 2) 
    // En el moment que jo estic cridant el component '<FirstApp />' a 'main.js' per construïr-lo, li afegeixo tres propietats amb els seus respectius valors: 'Title', 'subTitle' i 'paragraph: 

    // export const FirstApp = ({ title , subTitle, paragraph}) => {

    //   return (
    //     <>
    //       <h1>{ title }</h1> 
    //       <p>{ subTitle }</p>
    //       <p>{ paragraph }</p>
    //     </>
    //   )
    // }
    // Quan gravem els canvis, al navegador veiem 'M'agrada el lemon pie', 'Especialment el de Farga', '123'. Si mirem a '⚛️ components' i clickem a 'FirstApp', veurem que estarem rebent el mateix title, subTitle i paragraph: {"title": "M'agrada el lemon pie", "subTitle": "Especialment el de Farga", "paragraph: "123"}.


// ⚠ Si vulguessim sumar-li una xifra a una de les props, NO es faria així, perquè l'estariem concatenant i donaria com a resultat un string '1231'
// export const FirstApp = ({ title , subTitle, paragraph}) => {
//   return (
//     <>
//       <h1>{ title }</h1> 
//       <p>{ subTitle }</p>
//       <p>{ paragraph + 1 }</p>
//     </>
//   )
// }

  // ✓ Es faria així: anem a 'main.jsx' i a 'subTitle' li canviem el valor a '{ 123 }'
  // export const FirstApp = ({ title , subTitle, paragraph}) => {
  //   return (
  //     <>
  //       <h1>{ title }</h1> 
  //       <p>{ subTitle }</p>
  //       <p>{ paragraph + 1 }</p>
  //     </>
  //   )
  // }
    // A la pantalla ens surt '124'



  





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
// const getResult = (a,b) => {
//   return a + b;
// }
// export const FirstApp = () => {
//   return (
//     <>
//       <h1>{ getResult(1,10) }</h1> 
//       <p>Sóc un subtítol</p>
//     </>
//   )
// }
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

// * De manera predeterminada, col·locar les funcions FORA dels components.





  


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
