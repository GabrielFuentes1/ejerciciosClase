// 2 clases para modelar el proceso de compra en una plataforma.


//Clase Artículo

class Item {
    constructor(name, description, price, quantity, photoUrl,width,heigth){
        this.name = name;
        this.description = description;
        this.price = price;
        this.quantity = quantity;
        this.photoUrl = photoUrl;
        this.width = width;
        this.height = height;
        this.sku = sku;

    }
}

//Clase Venta

class Sale{
    constructor(channel,items,clientId,sku,total,email){
        this.channel = channel;
        this.items = items;
        this.clientId = clientId;
        this.total = total,
        this.email = email;

    }
}