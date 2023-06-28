
// Dado el código HTML, completarlo para que cuando se rellenen los campos de nombre y apellido y hacer clic en 
//     "enviar datos", aparezca por pantalla el texto
//     "hola nombre apellido, gracias por rellenar el formulario"



function enviarSaludo (){
    let  nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let saludo = document.getElementById("saludo");
    saludo.innerHTML = `hola ${nombre} ${apellido} , gracias por rellenar el formulario`
}