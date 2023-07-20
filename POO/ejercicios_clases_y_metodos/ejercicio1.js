
// Crear clase "Rectangulo", metodos para calcular area y perimetro

//Clase rectángulo
class Rectangulo {
    constructor(largo,ancho){
        this.largo = largo;
        this.ancho = ancho;
        // CALCULAR AREA
        this.area = function(){
            const area = this.largo * this.ancho;
            console.log("El área del rectángulo es: " + area)
        };
        this.perimetro = function(){
            const perimetro = (this.largo *2) + (this.ancho *2);
            console.log("El perímetro del recángulo es: " + perimetro)
        };

    }
}


const rectangulo1 = new Rectangulo(5,2);
rectangulo1.area();
rectangulo1.perimetro();
