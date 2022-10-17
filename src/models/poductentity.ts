/**
 * @class productentity for creating our product table in our database
 * 
 */

import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"
@Entity()
export class Poductentity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    img: string

    @Column()
    title: string

    @Column("text")
    subtitle: string

    @Column()
    price: number

    @Column()
    icon: string


    setImg(image: string): void {
        this.img = image;
    }

    setTtile(title: string): void {
        this.title = title;
    }

    setSubTitle(sub: string): void {
        this.subtitle = sub;

    }

    setPrice(price:number):void {
        this.price = price;
    }

    setIcon(icon:string = "arrow.svg"):void {
        this.icon = icon;
    }

   
    get productID():number {
        return this.id;
    }

    get productImg():string{
        return this.img;
    }

    get productTile():string {
        return this.title;
    }

    get productSubTitle():string {
        return this.subtitle;
    }

    get ProductPrice():number{
        return this.price;
    }
}
