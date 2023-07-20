// Principio de sustitucion de Liskov

var License = function(user){
    this.calculateFee = function(){
        // logic to calculate Fee
    }
}

License.prototype.PersonalLicense = function(user){
    this.calculateFee(user)
}

License.prototype.BusinessLicense = function(user){
    this.calculateFee(user)
    this.getUsers = function(){
        //Logic to get all users un Business
    }
}