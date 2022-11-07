/**
 * @class productentity for creating our product table in our database
 * 
 */

import { Entity, PrimaryGeneratedColumn, Column, OneToMany, } from "typeorm"
import { ItemsEntity } from "./items.entity"

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

    @OneToMany(() => ItemsEntity, (item) => item.product)
    items: ItemsEntity[];


    setImg(image: string): void {
        this.img = image;
    }

    setTtile(title: string): void {
        this.title = title;
    }

    setSubTitle(sub: string): void {
        this.subtitle = sub;

    }

    setPrice(price: number): void {
        this.price = price;
    }

    setIcon(icon: string = "arrow.svg"): void {
        this.icon = icon;
    }


    get productID(): number {
        return this.id;
    }

    get productImg(): string {
        return this.img;
    }

    get productTile(): string {
        return this.title;
    }

    get productSubTitle(): string {
        return this.subtitle;
    }

    get ProductPrice(): number {
        return this.price;
    }

    get Items(): ItemsEntity[] {
        return this.items;
    }

    set Items(items: ItemsEntity[]) {
        this.items = items;
    }


    static sumPricesByQuantities(products: Poductentity[], productsInSession: any): number {
        let total: number = 0;
        for (let index = 0; index < products.length; index++) {
            total = total + products[index].ProductPrice * productsInSession[products[index].productID];

        }
        return total;

    }
}
