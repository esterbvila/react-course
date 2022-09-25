
// Fetch API. Llibreria que ja ve inclosa en els navegadors web i en js. Ens permetrà fer peticions http a endpoints sense importar cap llibreria. No vol dir que sigui millor que 'axios', 'request' o altres plataformes o codis fets per realitzar peticions http.

// https://developers.giphy.com/ es un API que permet importar gifs animats que mostrarem en la pantalla. No és un endpoint obert, pel que generarem un 'api key' per poder fer peticions.

// 1) Cuan ens haguem creat un compte i una App a giphy, copiem l'API Key i la posem en una constant:
const apiKey = '00huU47vPVScnSMB1o22TS9GKU1QNkIK';

// 2) Anem a la documentació -> Random Endpoint -> copiem el 'Gif URL' = api.giphy.com/v1/gifs/random. Insertem l'URL al navegador i ens surt això: 
  /* {
        "data": [],
        "meta": {
          "status": 401,
          "msg": "No API key found in request.",
          "response_id": ""
        }
      } */

// 3) Ens descarreguem l'extensió JSON Viewer perquè sigui més agradable a la vista.

// 4) Al navegador, afegir l'API Key al final de 'api.giphy.com/v1/gifs/random'. Quedarà així: 'api.giphy.com/v1/gifs/random?api_key=00huU47vPVScnSMB1o22TS9GKU1QNkIK'. Se'ns carregarà una resposta amb molta info.

// 5) La info. que ens ineressa està dins de data i images. Dins d'images podem seleccionar la que vulguem. Seleccionarem l'anomenada 'original' i ens fixarem en les divereses urls que podrem utilitzar.


// Com funciona el Fetch API?
  // 1) 
  const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`)

  // 2) Com és una promesa:
  peticion.then( resp => {
    console.log( resp ) // Response {type: 'cors', url: 'https://api.giphy.com/v1/gifs/random?api_key=00huU47vPVScnSMB1o22TS9GKU1QNkIK', redirected: false, status: 200, ok: true, …}
  })
  .catch ( console.warn )
  // 'ok: true' vol dir que la petició s'ha fet correctament

  // 3) Del que ens ha retornat la consola també interessa el que ve en el body 'body: ReadableStream'. Ens interessa el que hi ha dins del 'ReadableStream', per obtenir-ho haurem de fer una altra promesa:
  // ⚠
  peticion.then( resp => {
    resp.json().then( data => {
      console.log( data ) // {data: {…}, meta: {…}}
    })
  })
  .catch ( console.warn ) 

  // 4) Com la petició que acabem d'escriure és bastant complexe i es veu lletja, difícil de mantenir, canviarem el codi, donat que les promeses es poden encadenar. Farem un retorn implícit de la 'resp.json' ('.then( resp => resp.json())') que retornarà una promesa i la passarà a ('.then( data => { console.log( data )})'). Aquest codi es veu molt més net i retornarà la mateixa resposta, es coneix com a promeses en cadena.
  const peticion2 = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`)
  peticion2
    .then( resp => resp.json() )
    .then( data => {
      console.log( data ) // {data: {…}, meta: {…}}
    })
    .catch ( console.warn )

  // 5) Com en realitat només ens interessa el que hi ha dins l'objecte 'data' i no 'meta', també podem fer:
    // 5.1) 'console.log( data.data )'. Però es veu una mica lletj.
    const peticion3 = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`)
    peticion3
      .then( resp => resp.json() )
      .then( data => {
        console.log( data.data ) // {type: 'gif', id: 'dVcP6t2mxVv56OcymV', url: 'https://giphy.com/gifs/monstercat-dVcP6t2mxVv56OcymV', slug: 'monstercat-dVcP6t2mxVv56OcymV', bitly_gif_url: 'https://gph.is/g/E1n8ePD', …}
      })
      .catch ( console.warn )

    // 5.2) Millor amb la desestructuració '( { data } )' :
    const peticion4 = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`)
    peticion4
      .then( resp => resp.json() )
      .then( ( { data } ) => {
        console.log( data ) // {type: 'gif', id: 'dVcP6t2mxVv56OcymV', url: 'https://giphy.com/gifs/monstercat-dVcP6t2mxVv56OcymV', slug: 'monstercat-dVcP6t2mxVv56OcymV', bitly_gif_url: 'https://gph.is/g/E1n8ePD', …}
      })
      .catch ( console.warn )

  // 6) Com m'interessen les 'images' de dins de data, faig: 
  const peticion5 = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`)
  peticion5
    .then( resp => resp.json() )
    .then( ( { data } ) => {
      console.log( data.images ) // {fixed_width_still: {…}, preview_gif: {…}, fixed_height_downsampled: {…}, preview: {…}, fixed_height_small: {…}, …}
    })
    .catch ( console.warn )
  
  // 6) Treballarem amb 'original', per tant, fem:
  const peticion6 = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`)
  peticion6
    .then( resp => resp.json() )
    .then( ( { data } ) => {
      console.log( data.images.original ) // {frames: '21', hash: '13d17ff6b4fa70e0a79f9db8be69054e', height: '270', mp4: 'https://media2.giphy.com/media/495DZk2QfUs9qE7TxM/…1664ec0658aa613e033697db33461f&rid=giphy.mp4&ct=g', mp4_size: '132931', …}
    })
    .catch ( console.warn )
  
  // 6) Treballarem amb la 'url' de 'original', per tant, fem:
  const peticion7 = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`)
  peticion7
    .then( resp => resp.json() )
    .then( ( { data } ) => {
      console.log( data.images.original.url ) // https://media4.giphy.com/media/l4pTbhzXdpgsorqRq/giphy.gif?cid=53bf2cb8e7dcb128b479cbf8a0f85934a3e7f6691da616ba&rid=giphy.gif&ct=g
    })
    .catch ( console.warn )
  
  // 7) Insertem l'url al navegador i observem el gif que ens surt.

  // 8) Extreiem l'url i l'emmagatzemem en una variable mitjançant la desestructuració:
  const peticion8 = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`)
  peticion8
    .then( resp => resp.json() )
    .then( ( { data } ) => {
      const { url } = data.images.original;
      console.log( url ) // https://media4.giphy.com/media/Y9G5x743cUbpJ9Iaty/giphy.gif?cid=53bf2cb83c8a9775195c95b2481edd7972ff429f90102a16&rid=giphy.gif&ct=g
    })
    .catch ( console.warn )
  
  // 9) Creem aquesta imatge en l'html:
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