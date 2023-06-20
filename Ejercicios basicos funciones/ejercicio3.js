

// hay que sumarla tantas veces para que entrege string

// console.log("funcionando primero");

function generar_caracteres(n,caracter) {
    let letra = caracter.toString();
    let palabra = letra

    i= 0;
    x= 0;
    while (i < n -1) {
        palabra = palabra + letra;
        //console.log(i)
        i ++;
    }
    palabra = palabra.toString();
    console.log(palabra.toString());
    //console.log(palabra);
}

generar_caracteres(5,"X")

// Con este codigo intenté que la funcion entregara un string, pero no lo conseguí, solo undefined
console.log(typeof(palabra));


