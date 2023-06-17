
const producto = {
    precio: 1000,
    descuento: 50,
    neto: function(){

        console.log("El valor final es", (producto.precio - producto.descuento*producto.precio/100));

    }

}

producto.neto();
