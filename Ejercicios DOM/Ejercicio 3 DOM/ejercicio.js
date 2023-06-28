
// 1 -  Acceder al contenedor sin usar QuerySelector
let contenedor = document.getElementById("container");
//console.log(contenedor);

//  2 - Acceder al contenedor con QuerySelector
let contenedor2 = document.querySelector("body").childNodes[3];
//console.log(contenedor2);


// 3 - Acceder a todos los "second" que haya, son clases, así que con .clase
let second = document.querySelectorAll(".second");
//console.log(second);


// 4 - Acceder a la clase "third", solo al elemento dentro de la etiqueta ol
let elementoThird = document.querySelectorAll(".third")[1];
//console.log(elementoThird);

// 5 - Dar el texto "¡Hola!" a la seccion id= contenedor
contenedor.childNodes[1].childNodes[1].textContent = "¡Hola!"
//console.log(contenedor.childNodes[1].childNodes[1].textContent)


// 6- Agregar la clase principal al div con una clase de pie de pagina 

let clasePiePagina = document.createElement("div");
clasePiePagina.className = "pie-de-pagina";
clasePiePagina.textContent = "Pie de pagina "
//console.log(clasePiePagina);
//console.log(document.querySelector("body"))
document.querySelector("body").appendChild(clasePiePagina);

//console.log(clasePiePagina);


// 7 - Eliminar la clase principal en el div con una clase de pie de pagina

document.querySelector("body").removeChild(clasePiePagina);

// 8 - Crear un nuevo elemento li

let nuevoLI = document.createElement("li");

// 9 - Darle al li el texto "cuatro"

nuevoLI.textContent = "cuatro";
nuevoLI.className = "fourth"
//console.log(nuevoLI);

// 10 - Agregue el li al elemento ul

console.log(document.getElementById("container").childNodes[1]);
document.getElementById("container").childNodes[1].appendChild(nuevoLI);




