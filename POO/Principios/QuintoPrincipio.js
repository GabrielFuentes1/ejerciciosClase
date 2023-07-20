// Principio de inversiones de dependencias


axios.get("/someAddress/someResource", function(response){
    this.setState({
        value1: response.value1,
        value2: response.value2
    });
});



// ------------------------------

// este const axios es de mayor nivel
const axios = require("axios"); // se basa en la abstraccion 


axios.get("/someAddress/someResource", function(response){
    this.setState({
        value1: response.value1,
        value2: response.value2
    });
});

// AMBOS DEPENDEN DE LA ABSTRACCION 