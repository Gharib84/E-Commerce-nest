import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { OrdersEntity } from "./orders.entity";
import { Poductentity } from "./poductentity";

@Entity()
export class ItemsEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    quantity: number;

    @Column()
    price: number;

    @ManyToOne(() => OrdersEntity, (order) => order.items)
    order: OrdersEntity;


    @ManyToOne(() => Poductentity, (product) => product.items)
    product: Poductentity;

    constructor() {

    }


    get ID(): number {
        return this.id;
    }

    setID(id: number) {
        this.id = id;
    }

    get Quntity(): number {
        return this.quantity;
    }

    SetQuntity(q: number) {
        this.quantity = q;
    }

    get Price(): number {
        return this.Price;
    }

    setPrice(price: number) {
        this.price = price;
    }

    get Order(): OrdersEntity {
        return this.order;
    }

    setOrder(order: OrdersEntity) {
        this.order = order;
    }

    get Produt(): Poductentity {
        return this.product;
    }

    setProduct(product: Poductentity) {
        this.product = product;
    }



}
