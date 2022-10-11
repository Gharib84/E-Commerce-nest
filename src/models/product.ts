export class Product {
    /**
     * this class for sucture our product 
     * each product has an attribute that help us to descript it as 
     * id
     * image
     * title 
     * subtitle
     * price
     * icon
     */

    public id: number;
    public img: string;
    public title: string;
    public subtitle: string;
    public price: number;
    public icon: string;

    constructor(id?:number, img?:string, title?:string, subtitle?:string, price?:number, icon?:string){

        this.id = id;
        this.img = img;
        this.title = title;
        this.subtitle = subtitle;
        this.price = price;
        this.icon = icon;

    }



}

