
// Crear funcion con el nombre funcionArray(), que toma dos arreglos de numeros enteros como parámetro
// retorna 1 solo arreglo y cada elemento es multiplicado por 2

function funcionArray (array1,array2){
    let listaFinal = [];
    let unionLista = [...array1, ...array2];
    
    unionLista.forEach(numero => {
        numeroNuevo = numero * 2;
        listaFinal.push(numeroNuevo); 
    });

    console.log(listaFinal);

}

let lista1 = [2,5,2];
let lista2 = [1,5,3];

funcionArray(lista1,lista2);
