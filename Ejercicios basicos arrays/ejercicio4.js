
function sumaLista(lista){
    let total = 0;
    for(let i=0; i< lista.length; i++){
        total = total + lista[i];
    }
    console.log(`La suma de todos los numeros de la lista entregada es: ${total}`);


};

// Lista del ejercicio, debería entregar 14
const listaEjercicio = [2,4,5,1,2];




sumaLista(listaEjercicio);