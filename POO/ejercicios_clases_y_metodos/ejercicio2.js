// Crear clase cuenta bancaria con metodos saldo, deposito y retiro

// crear clase "CuentaBancaria"

class CuentaBancaria {
    constructor (){
        this.saldo = 0;
        //Metodo depositar
        this.depositar = function (cantidad){
            this.saldo = this.saldo + cantidad;
            console.log("Deposito realizado, su nuevo saldo es " + this.saldo)
        };
        this.retirar = function(cantidad){
            if(this.saldo > cantidad){
                this.saldo = this.saldo - cantidad
                console.log("Retiro realizado exitosamente");
            } else {
                console.log("Saldo insuficiente para realizar retiro, saldo actual: " + this.saldo)
            }
        };
        this.consultarSaldo = function(){
            console.log("Su saldo actual es: " + this.saldo)
        };
    }
}


const CuentaRut = new CuentaBancaria();

CuentaRut.consultarSaldo();
CuentaRut.depositar(1000);
CuentaRut.retirar(2000);
CuentaRut.retirar(500);
CuentaRut.consultarSaldo();