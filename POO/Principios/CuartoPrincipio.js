
// Principio de segregacion de interfaz

class User{
    constructor(user){
        this.user = user;
        this.initiateUser();
    }
    initiateUser(){
        this.name = this.user.name
        this.validateUser()
    }
}



//OBJETO (INSTANCIA)
const user = new User({userProperties, validateUser(){}});



class User{
    constructor(user){
        this.user = user;
        this.initiateUser();
        this.setupOptions = user.options
    }
    initiateUser(){
        this.name = this.user.name
        this.setupOptions ()
    }
}



//OBJETO (INSTANCIA)
const user2 = new User();