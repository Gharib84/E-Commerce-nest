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
    prince: number;

    @ManyToOne(() => OrdersEntity, (order) => order.items)
    order: OrdersEntity;


    @ManyToOne(()=> Poductentity,(product)=> product.items)
    product:Poductentity;

    constructor() {

    }


    get ID(): number {
        return this.id;
    }

    set ID(id: number) {
        this.id = id;
    }

    get Quntity(): number {
        return this.quantity;
    }

    set Quantity(q: number) {
        this.quantity = q;
    }

    get Price(): number {
        return this.Price;
    }

    set Price(price: number) {
        this.prince = price;
    }

    get Order():OrdersEntity{
        return this.order;
    }

    set Order(order:OrdersEntity){
        this.order = order;
    }

    get Produt():Poductentity{
        return this.product;
    }

    set Product(product:Poductentity){
        this.product = product;
    }



}
