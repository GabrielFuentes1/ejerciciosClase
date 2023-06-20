
function esVocal(letra){
    letra = letra.toLowerCase();
    if (letra === "a" ||letra === "e"|| letra === "i"|| letra === "o"|| letra === "u" ){
        console.log("La letra ingresada es una vocal")
        return true

    } else {
        console.log("La letra entregada NO es una vocal")
        return false
    }

}


esVocal("B");
esVocal("A");
