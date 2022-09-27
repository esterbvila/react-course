
// Desestructuració o Asignació Desestructurant. JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables

// 𐄂 Creem un objecte dins d'una constant. És correcte però és repetitiu estar escrivint persona tota l'estona 'persona.' cada vegada que necessito algún valor d'alguna propietat de l'objecte. Aquí és on entra en joc l'assignació desestructurant.
const persona = {
  nombre: 'Tony',
  edad: 45,
  clave: 'Ironman',
};
console.log( persona.nombre ); // Tony
console.log( persona.edad); // 45
console.log( persona.clave ); // Ironman
console.log( persona ) // {nombre: 'Tony', edad: 45, clave: 'Ironman'}

// ✓ Assignació Desestructurant: aquí js extreu 'nombre', de l'objecte 'persona'
const { nombre } = persona;
console.log( nombre ) // Tony

// ✓ En el cas que ja tinguem una variable que ja s'anomeni 'nombre', i la vulguessim renombrar a 'nombre2', ho podriem fer de la seguent manera:
const { nombre:nombre2 } = persona;
console.log( nombre2 ) // Tony

// ✓ Si vull obtenir diversos valors de diverses propietats de l'objecte:
const { nombre:nombre3, edad, clave } = persona;
console.log( nombre ) // Tony
console.log( edad ) // 45
console.log( clave ) // Ironman
console.log( nombre3, edad, clave ) // Tony 45 Ironman

// La desestructuració té molts usos:
// a) Torna un objecte
const retornaPersona = ( usuario ) => { 
  console.log(usuario)
}
retornaPersona ( persona ); // {nombre: 'Tony', edad: 45, clave: 'Ironman'}

// b) Desestructuració directament a l'argument:
const retornaPersona2 = ({ nombre, edad }) => { 
  console.log( nombre, edad ) // Tony 45
}
retornaPersona2 ( persona ); 

// c) Amb la desestructuració es poden assignar valors per defecte. Si existeix la propietat en l'objecte, utilitza aquella propietat, sinó, utilitza la que nosaltres li definim:
const retornaPersona3 = ({ nombre, edad, rango = 'Capitán' }) => { 
  console.log( nombre, edad, rango ) // Tony 45 Capitán
}
retornaPersona3 ( persona ); 
 
const persona2 = {
  nombre: 'Tony',
  edad: 45,
  clave: 'Ironman',
  rango: 'Soldado'
};
const retornaPersona4 = ({ nombre, edad, rango = 'Capitán' }) => { 
  console.log( nombre, edad, rango ) // Tony 45 Soldado
}
retornaPersona4 ( persona2 ); 

// d) Crear un nou objecte que se li reanomeni el nom de dues propietats i que retorni un objecte. Molt utilitzat en React. 
const retornaPersona5 = ({ clave, nombre, edad, rango = 'Capitán' }) => { 
  return { 
    nombreClave: clave, 
    anios: edad,
  }
}
const avenger = retornaPersona5( persona2 );
console.log( avenger ); // {nombreClave: 'Ironman', anios: 45}

// Renombro la funció i segueix funcionant igual
const stablishContext = ({ clave, nombre, edad, rango = 'Capitán' }) => { 
  return { 
    nombreClave: clave, 
    anios: edad,
  }
}
const avenger2 = stablishContext( persona2 );
console.log( avenger2 ); // {nombreClave: 'Ironman', anios: 45}

// Tasca: fer la desestructuració al que retorna el 'stablishContext'
const { nombreClave, anios } = stablishContext( persona );
console.log(nombreClave, anios) // Ironman 45

// Nested Destructuration (retornar un objecte que té més objectes dins):
const stablishContext2 = ({ clave, nombre, edad, rango = 'Capitán' }) => { 
  return { 
    nombreClave: clave, 
    anios: edad,
    latIng: {
      lat: 14.1232,
      lng: -12.3232,
    }
  }
}
const { nombreClave:nombreClave2, anios:anios2, latIng:latIng2 } = stablishContext2( persona2 );
console.log( nombreClave2, anios2 ); // Ironman 45 
console.log( latIng2 ); // {lat: 14.1232, lng: -12.3232}

// Com tornar la latitut i la longitut en les seves respectives constants?
  // 1a opció ( no tant comuna ):
  const stablishContext3 = ({ clave, nombre, edad, rango = 'Capitán' }) => { 
    return { 
      nombreClave: clave, 
      anios: edad,
      latIng: {
        lat: 14.1232,
        lng: -12.3232,
      }
    }
  }
  const { nombreClave:nombreClave3, anios:anios3, latIng:{ lat, lng } } = stablishContext3( persona2 );
  console.log( nombreClave3, anios3 ); // Ironman 45
  console.log( lat, lng ); // 14.1232 -12.3232

  // 2a opció ( més habitual )
  const stablishContext4 = ({ clave, nombre, edad, rango = 'Capitán' }) => { 
    return { 
      nombreClave: clave, 
      anios: edad,
      latIng: {
        lat: 14.1232,
        lng: -12.3232,
      }
    }
  }
  const { nombreClave:nombreClave4, anios:anios4, latIng:latIng3 } = stablishContext4( persona2 );
  const { lat:lat2, lng:lng2 } = latIng3;
  console.log( nombreClave4, anios4 ); // Ironman 45
  console.log( lat2, lng2 ); // 14.1232 -12.3232










