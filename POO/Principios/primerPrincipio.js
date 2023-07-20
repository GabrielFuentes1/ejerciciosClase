// Principio de responsabilidad  única

// Inicial - no cumple con el principio

function createUser (name,email){
    let re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i; //  expresion regular para validar formato de email@email.com
    let isEmailValid = re.test(email);
    if(isEmailValid){
        createUserInDabase(name,email)
    }
}

//DESACOPLE

const {name,email} = req.body;
function validateRequest(name,email){
    let re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i; //  expresion regular para validar formato de email@email.com
    let isEmailValid = re.test(email);
    if(isEmailValid){
        createUser(name,email)
    }
}

function createUser(name,email){
    createUserInDabase(name,email)
};