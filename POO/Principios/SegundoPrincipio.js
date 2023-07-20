// Principio de abierto - cerrado

let allowedRoles = ["admin","owner"]

function checkPrivilege(user){
    if(allowedRoles.includes(user.role)){
        return true; // user has privilege
    } else{
        return false
    }
}

function addRole(role){
    allowedRoles.push(role)
};