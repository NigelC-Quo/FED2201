export class Product {
    // define the expected types of properties
    public id: number;
    public type: string;
    public price: number;
    public name: string;
    public image: string;
    public description: string;


    // define the constructor function for the class's instantiation
    constructor (id: number, type: string, price: number, name: string, image: string, description: string) {
        this.id = id;
        this.type = type;
        this.price = price;
        this.name = name;
        this.image = image;
        this.description = description;
    }

}