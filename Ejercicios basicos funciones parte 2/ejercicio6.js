// Crear funcion con el nombre booleanoArray(), toma dos arreglos de números como parámetro y retorne booleano
//  une los dos arreglos en uno solo, si la longitud del nuevo arreglo es mayor o igual a 10 retorna true si no false


function booleanoArray(array1,array2){
    let unionArrays = [...array1, ...array2]
    largo = unionArrays.length
    if (largo >= 10){
        console.log("El largo de la union es  mayor a 10, es", largo);
        return true
        
    } else {
        console.log("Es largo de la union es menor a 10, es",largo);
        return true
    }
}


// let lista1 = [1,2,3];
// let lista2 = [4,5,6];
// let lista3 = [7,8,9,10,11,12,13,14];


// booleanoArray(lista1,lista3);