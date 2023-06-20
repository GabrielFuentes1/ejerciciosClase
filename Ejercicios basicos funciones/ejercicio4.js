
function sumaArreglo(arreglo) {
    longitud = arreglo.length;
    let suma = 0;
    arreglo.forEach(function(numero){
        suma = suma + numero;
        //console.log(suma)
    })

    let sumaFinal = suma + longitud;
    console.log(`La suma total de los numeros del arreglo más la longitud es: ${sumaFinal}`)
}


sumaArreglo([1,2,3,4]);
