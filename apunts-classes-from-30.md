# Apunts de les classes

## 30. Què és un component React?    

Petita peça de codi encapsulada re-utilitzable que pot tenir un estat o no.

Upper Camel Case per anomenar els components. *Ex: TwitterApp*

Un component pot tenir un estat o no.

**Què és l’estat?**

Per exemple, un formulari (amb inputs: nom, cognom i edat), quan és renderitzat per primera vegada té un estat inicial. 

Aquest estat inicial és com es troba la informació d’aquest component la primera vegada, quan s’obre.

El Nom, Cognom i Edat del formulari no tenen cap valor, per tant el component només mostra:
	- Nom
	- Cognom
	- Edat

Un cop l’usuari comença a escriure, fa modificacions, i al formulari i hi apareixen valors. Per exemple:
	- Nom: Ester
	- Cognom: Batllori
	- Edat: 25

Cada vegada que l’usuari canviava una tecla i es modificava l’html, mostrant la informació en pantalla, això canviava l’estat. 
En poques paraules, l’estat és com es troba la informació del component en un punt determinat del temps.




## 31. Primera aplicació de React

Hi ha dues maneres amb les que podem treballar aplicacions de React que ja vinguin pre-configurades amb tot el que nosaltres utilitzarem.

Una d’elles és el CRA o Create React App, que és el que vam utilitzar per la introducció de js. [(https://create-react-app.dev/)]

CRA treballa en base a webpack. A diferencia de Webpack, Vite utilitza una altra manera de fer els canvis de mòduls, la qual cosa és molt més ràpid, especialment quan el projecte és més gran. 

Vite tendeix a ser una experiencia de desenvolupament super amigable, ràpida, eficient. 

Crearem l’aplicació amb les dues tecnologies, tot i que ens quedarem amb Vite.

CRA i Vite són les dues maneres més populars que hi ha d’utilitzar Reac, sense comptar que es pot utilitzar React com una llibreria directament, copiant-la en l’index, com vam veure inicialment. 

A la carpeta ‘react-course’ fem : 

        npm create vite
        cd 03-counter-app-vite
        npm install
        npm run dev

copiem CRA : ‘npx create-react-app my-app’

        cd ..
        npx create-react-app counter-app




## 32. Estructura de directorios - CRA

Observem que va ser creat mitjançant npm perquè té un ‘package-lock.json’. 

És un arxiu que li diu a la nostra app de Node com va ser construida la dependencia dels moduls de node. 

L’arxiu ‘package-lock.json’ no s’ha de tocar mai manualment. Simplement és per dir-li a node com va ser creat i com es construeixen els moduls de node. 

Si no tinguessim aquest arxiu, quan es fa l’npm install, es torna a crear.

‘.gitignore’ -> tots els arxius que volem que no siguin part del nostre repo.

Això és una applicació de Node que està configurada de tal manera que ens serveix per crear aplicacions de React. Amb aquesta mateixa idea treballen altres framworks i llibrearies.

‘.gitignore’ ->  la carpeta “node_modules” mai l’haurem de manipular directament. 

‘package.json’ -> info interessant, com ara : 
	- nom de l’app  (podem canviar)
	- versió (podem canviar)
	- dependencies de producció
	- commandaments o scripts que podem executar ràpidament amb aquest projecte
	-  Quin tipus de Lint volem utilitzar per detectar errors, treure warnings…

‘README.md’ -> arxiu de markdown, apareix en el repositori de github o alguna altra plataforma. Es pot visualitzar amb ‘Open preview’. El markdown és una versió supersimplificada d’html

‘node_modules’ -> casi el 99% de les dependencies no arriben a la versió de producció

‘public’-> L’objectiu del CRA és crear un SPA. L’SPA només té un ‘index.html’, pel que tota l’app de react acabarà sent muntada dins del `<div id=‘root’></>`  d’  ‘index.html’.

‘index.html’ ve configurat amb un ‘manifest.json’, que ajuda a que rapidament tinguem el punt incial d’una PWA (Progressive Web Application): per saber quina és la icona, el color, logos…

‘robots.txt’ -> pels boots de Google per indexar pàgines.

‘src’ -> 
	- ‘App.css’ -> estil global
	- ‘App.js’ -> també es pot veure com ‘App.jsx’. S’aconsella que si l’arxiu conté jsx acabi amb .jsx, en cas contrari, pot acabar en .js
	- ‘index.css’ -> arxiu d’estil global
	- ‘index.js’ -> punt d’entrada a de la nostra app. 
		Importació d’estil global
		Import del primer component ‘App’
		Eliminar ‘reportWebVitals’ d’import. 
		Tenim el ‘root’ que utilitza createRoot. Aquesta linia estableix quin és el node root per l’App de React. En aquest root renderitzem aquesta versió de React, que està bé que treballem en el mode estricte, ja que volem que ens adverteixi si estem realitzant malament algun codi, no estem seguint bones pràctiques, etc.




## 33. Estructura de directorios - Vite
El projecte de Vite, per defecte, té menys configuracions automàtiques.
- 'package.json' - hi ha algunes diferencies:
	- Menys dependencies a Vite. CRA instala moltes coses perquè l’usuari no les hagi de configurar. En el cas de Vite si que s’ha de fer instalacions. 
	- Forma de canviar moduls en calent de Vite - fa el canvi molt ràpid sense important com de gran sigui l’app.
	- “dev” - executa el commandament de vite, el qual realitza el live reload server…
	- “devDependencies” - al treballar amb Typescript ..
- No tenim Readme
- Tenim ‘index.html’ a l’arrel del nostre projecte (‘src’) i a CRA el teniem dins de la carpeta ‘public’.
- ‘index.html’ 
	- no hi ha manifest. 
	- modul inicial que acaba sent substiuit per altres moduls.
- ‘vite.config.js’ -> serveix per configuracions pròpies de Vite. És una manera que té Vite de treballar, no té a veure amb React. Al tenir plugins de React, posa React de manera global en tots els components. 
- ‘src’ -> té menys arxius
	- ‘App.css’ -> manejar l’estil del component App
	- ‘App.jsx’ -> Vite ho fa així perquè és un component de React. 
	- ‘main.jsx’ -> 
		- És l’equivalent a ‘index.js’ de CRA
		- En CRA crea una constant anomenada root, en Vite no hi ha constat, directament crida ReactDom.createRoot… en una sola línia.




## 34. Hola Mundo en React

        cd 03-counter-app-vite
        npm run dev

Corre per defecte en el port 3000, si està ocupat dona un altre.

1) Seleccionar tot el que es troba en el ‘src’ i ho borrem. Més fàcil aprendre des de 0 i mica en mica anar construïnt.
2) Crear main.jsx a src



## 36. Colocar estilos de CSS

Amb React podem utilitzar molts tipos d'estils diferents: Tailwind, Sass, Less...

La manera més bàsica d'aplicar estils (imaginant que vull crear un estil global, aplicant-se a tots els components):
	- me'n vaig a src i creo un axiu 'styles.css'


