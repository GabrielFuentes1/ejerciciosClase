// Crear una funcion multiplicarArreglo que tome como parámetro un arreglo de numeros, retomar la multiplicacion del numero menor y el numero mayor del mismo

function multiplicarArreglo (arreglo){
    let menor = arreglo[0] ;
    let mayor = arreglo[0];
    // Revisa cada elemento del arreglo y ve si es mayor o menor
    for (let i = 0; i < arreglo.length; i++ ){
        if (arreglo[i] <= menor){
            menor = arreglo[i]
        } else menor = menor
        if (arreglo[i] >= mayor){
            mayor = arreglo[i]
        } else {
            mayor = mayor
        }
    }


    let salida = menor * mayor
    console.log(`El numero mayor de la lista es ${mayor}`);
    console.log(`El numero menor de la lista es ${menor}`);
    console.log("La multiplicacion de ambos numeros es", salida);
}

let arreglin = [5,4,4,3,4,5,7,4]

multiplicarArreglo(arreglin);

