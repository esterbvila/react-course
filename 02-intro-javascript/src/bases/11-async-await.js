
// Async i Await. 
// You can see that we use the “async” keyword for the wrapper function printMyAsync. This lets JavaScript know that we are using async/await syntax, and is necessary if you want to use Await.
// Await makes your asynchronous code look more like synchronous/procedural code, which is easier for humans to understand.

// Com retornar una url amb una promesa:
const getImagenPromesa = () => {
  const promesa = new Promise( (resolve, reject)  => {
    resolve('https://ajasfsd.com')
  })
  return promesa;
};
getImagenPromesa().then( console.log ); // https://ajasfsd.com

// Però aquest codi és molt llarg. El podem simplificar:
const getImagenPromesa2 = () => {
  return new Promise( resolve => resolve('https://ajasfsd.com'))
};
getImagenPromesa2().then( console.log ); // https://ajasfsd.com

// Encara el podem simplificar més, tot i això encara és difícil de llegir:
const getImagenPromesa3 = () => new Promise( resolve => resolve('https://ajasfsd.com'));
getImagenPromesa3().then( console.log ); // https://ajasfsd.com


// Aquí entra el 'async'. Transforma una funció asíncrona perquè retorni una promesa. És molt més fàcil:
const getImagenPromesa4 = async() => {
  return 'https://ajasfsd.com';
}
console.log( getImagenPromesa4() ); // Promise {<fulfilled>: 'https://ajasfsd.com'}

// Ara gestionem la promesa adecuadament:
const getImagenPromesa5 = async() => {
  return 'https://ajasfsd.com';
}
getImagenPromesa5().then( console.log ) // https://ajasfsd.com


// Await ajuda a treballar tot el codi com si fos sincronic. Await va de la mà d'async sempre. Async pot anar sense l'await.

// Recrear l'exercici anterior de Giphy amb l'async i l'await:
  // Exercici anterior sense async i await
  const apiKey = '00huU47vPVScnSMB1o22TS9GKU1QNkIK';
  const peticion9 = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`)
    peticion9
      .then( resp => resp.json() )
      .then( ( { data } ) => {
        const { url } = data.images.original;
        const img = document.createElement('img');
        img.src =  url;
        document.body.append( img );
      })
      .catch ( console.warn )

  // Reformulat amb async i await
  const getImagenPromesa6 = async() => {

    const apiKey = '00huU47vPVScnSMB1o22TS9GKU1QNkIK';
    const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
    const { data }  = await resp.json();
    console.log( data ) // {data: {…}, meta: {…}}
    
    const { url } = data.images.original;
    console.log( url ) // https://media4.giphy.com/media/l2JdZQLZVqcBnNUwo/giphy.gif?cid=53bf2cb84e0d67b4886bcf6163f5e760fe85b03ddb3c28e9&rid=giphy.gif&ct=g

    const img = document.createElement('img');
    img.src =  url;
    document.body.append( img );
  }
  getImagenPromesa6();
    // Await diu: espera a que la promesa fetch() acabi, abans d'executar la següent linia de codi.
    // El mateix pasa amb resp.json()
    // La consola ens retorna exactament el mateix que amb l'exercici anterior


  // Gestionar un error en una petició async i await utilitzant el try i el catch: 
  const getImagenPromesa7 = async() => {
    try{
      const apiKey = '00huU47vPVScnSMB1o22TS9GKU1QNkIK';
      const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
      const { data }  = await resp.json();
      console.log( data ) // {data: {…}, meta: {…}}
      
      const { url } = data.images.original;
      console.log( url ) // https://media4.giphy.com/media/l2JdZQLZVqcBnNUwo/giphy.gif?cid=53bf2cb84e0d67b4886bcf6163f5e760fe85b03ddb3c28e9&rid=giphy.gif&ct=g
  
      const img = document.createElement('img');
      img.src =  url;
      document.body.append( img );
    } catch (error) {
      // gestió de l'error, per exemple posant una url per defecte
      console.error(error)
    }
  }
  getImagenPromesa7();
    // El try intenta realitzar el que té a dins , i si dona algún error, aleshores executa el que hi ha a l'interior del catch.
  

