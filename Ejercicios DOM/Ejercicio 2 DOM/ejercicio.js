
function getFormvalue (){
    let nombre = document.getElementById("form1").childNodes[1].value;
    let apellido = document.getElementById("form1").childNodes[4].value;
    console.log(`Muchas gracias ${nombre} ${apellido} por rellenar el formulario`)
    
}

getFormvalue();