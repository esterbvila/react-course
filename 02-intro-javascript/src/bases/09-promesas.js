import { getHeroeById3 } from './08-imp-exp';

// Promises. Són asíncrones. Primer s'executarà el que és sincrònic.
// The problem with callbacks is it creates something called “Callback Hell.” Basically, you start nesting functions within functions within functions, and it starts to get really hard to read the code. So in this situation Promises came to handle the nested callback in a better way.

// Les promeses es creen amb un argument que és un callback. Aquest callback reb 2 arguments: un anomenat resolve i l'altre reject. 
// setTimeout és una funció pròpia de js que permet rebre un callback (1er argument) i quantitat de milisegons a esperar per executar el callback (2on argument). 
const promesa = new Promise( ( resolve, reject ) => {
  setTimeout(() => {
    console.log('2 segundos después') // 2 segundos después
  }, 2000);
});

// Com fer algo quan la promesa acabi d'executar-se: 'then' significa que la promesa s'ha fet correctament | 'catch' que ha donat un error | 'finally' és per alguna cosa que s'executarà després del 'then' i després del 'catch' (l'última cosa que s'executa)
promesa.then( () => {
  console.log('Then de la promesa') // ∅
})
  // ⚠ No ha aparegut 'Then de la promesa' a la consola perquè no estem rebent el 'then' de la promesa, en cap moment estem cridant el 'resolve' o el 'reject' de la promesa. Pel que la modificarem. En poques paraules li estarem dient: quan 'setTimeout' acabi, crides el 'resolve()' i aquest notificarà a qualsevol que estigui escoltant el 'then' i aquest executarà 'Then de la promesa'.

// Ben fet:
const promesa2 = new Promise( ( resolve, reject ) => {
  setTimeout(() => {
    resolve();
  }, 2000);
});
promesa2.then( () => {
  console.log('Then de la promesa') // Then de la promesa
})


// Tasca: simulació de conexió a una API i importar getHeroeById3(2)
const promesa3 = new Promise( ( resolve, reject ) => {
  setTimeout(() => {
    const heroe = getHeroeById3(2);
    console.log(heroe) // {id: 2, name: 'Spiderman', owner: 'Marvel'}
  }, 2000);
});
promesa3.then( () => {
  console.log('Then de la promesa') // Then de la promesa
});

// Resposta: 
  // 1) A l'arxiu '08-imp-exp.js' he afegit 'export' a 'const getHeroeById3' i en aquest, he afegit 'import { getHeroeById3 } from './bases/08-imp-exp';. A la consola ens surt imprès l'heroi demanat: '{id: 2, name: 'Spiderman', owner: 'Marvel'}'

  // 2) Ara com ho faig per enviar l'heroi al 'then' de la promesa? Crido el 'resolve()' amb l'argument 'heroe' i 'resolve' transfereix el valor dels arguments ('heroe') a 'promesa.then()'. 
const promesa4 = new Promise( ( resolve, reject ) => {
  setTimeout(() => {
    const heroe = getHeroeById3(2); // 'const p1 = getHeroeById3(2);' donaria el mateix resultat
    resolve( heroe ); // 'resolve( p1 )' donaria el mateix resultat
  }, 2000);
});

  // 3) Per consequència escrivim 'heroe' com a argument de 'then'. ⟶ No cal que el nom de l'argument de 'then' sigui igual al que se li passa a 'resolve'. En comptes de escriure 'heroe' a 'resolve()' i a la 'const' podriem escriure 'p1', per exemple ⟵ . Rebem un heroi a 'console.log()'.
promesa4.then( ( heroe ) => {
  console.log('heroe', heroe) // {id: 2, name: 'Spiderman', owner: 'Marvel'}
});

  // 4) Imaginem que no funciona. Cridariem el 'reject()', que significa que no es pot trobar l'heroi. ⚠ L'error a la consola ens diria que hi ha un error en una de les promeses però que no hi hauria codi escrit que el gestioni...
const promesa5 = new Promise( ( resolve, reject ) => {
  setTimeout(() => {
    const heroe = getHeroeById3(2);
    reject( 'No se pudo encontrar el héroe' ); // Uncaught (in promise) No se pudo encontrar el héroe
  }, 2000);
});

  // 5) Per això escriuriem un 'catch', que rebria l'error i l'escriuria a la consola
promesa5.then( ( heroe ) => {
  console.log('heroe', heroe) 
}) // No se pudo encontrar el héroe
.catch( err => console.warn( err ) );


// No es pot fer així perquè per defecte 'getHeroeByIdAsync()' torna 'void' o 'undefined', no una promesa
/* const getHeroeByIdAsync = ( id ) => {
  const promesa = new Promise( ( resolve, reject ) => {
    setTimeout(() => {
      const heroe = getHeroeById3( id );
      resolve( heroe );
      reject( 'No se pudo encontrar el héroe' );
    }, 2000);
  });
}
getHeroeByIdAsync(4).then( ()=> {}) */


// Això ho resolem  substituint 'const promesa =' per 'return' o també, tot i que és menys comú afegint 'return promesa;' al final de la funció.
const getHeroeByIdAsync2 = ( id ) => {
  return new Promise( ( resolve, reject ) => {
    setTimeout(() => {
      const heroe = getHeroeById3( id );
      resolve( heroe );
      reject( 'No se pudo encontrar el héroe' );
    }, 2000);
  });
  // return promesa;
}
getHeroeByIdAsync2(4) // Heroe {id: 4, name: 'Flash', owner: 'DC'}
.then( heroe => console.log('Heroe', heroe ));

// Si l'heroi no es troba, que cridi al 'reject()':
const getHeroeByIdAsync3 = ( id ) => {
  return new Promise( ( resolve, reject ) => {
    setTimeout(() => {
      const p1 = getHeroeById3( id );
      if ( p1 ) {
        resolve( p1 );
      }else{
        reject( 'No se pudo encontrar el héroe' );
      }
  // No es faria així, donaria 'heroe undefined':
    // resolve( heroe );
    // reject( 'No se pudo encontrar el héroe' );
    }, 2000);
  });
}
getHeroeByIdAsync3(10) //  No se pudo encontrar el héroe
  .then( heroe => console.log('Heroe', heroe ))
  .catch( err => console.warn( err ) );
// També es podria fer:
  // .then( console.log )
  // .catch( console.warn );