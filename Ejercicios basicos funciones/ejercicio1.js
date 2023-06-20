
function numeroMayor(a,b,c){
    if (a === b  && b ===c){
        console.log("Los tres numeros ingresados son iguales")
    } else if (a > b && a > c) {
        console.log("El numero mayor es", a )
    } else if (b > a && b > c){
        console.log("El numero mayor es ", b)
    } else {
        console.log("El numero mayor es ", c)
    }
}


numeroMayor(1,1,5);



