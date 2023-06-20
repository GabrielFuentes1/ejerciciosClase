

let lista = [1,2,3];
let suma = 0;

function sumarArray(array){
    array.forEach(function(numero){
        suma = suma + numero;
        console.log(suma)
    })
}



let sumaFinal = sumarArray([1,4,5]);

console.log(suma)