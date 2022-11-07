import { Entity, Column, OneToMany, ManyToOne, CreateDateColumn, PrimaryGeneratedColumn } from "typeorm";
import { UsersTable } from "./users-table";
import { ItemsEntity } from "./items.entity";


@Entity()
export class OrdersEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    total: number;

    @CreateDateColumn()
    date: Date;

    @ManyToOne(() => UsersTable, (user) => user.orders)
    user: UsersTable;

    @OneToMany(() => ItemsEntity, (item) => item.prince)
    items: ItemsEntity[];



    constructor() {

    }


    get ID(): number {
        return this.id;
    }

    set ID(id: number) {
        this.id = id;
    }

    get Total(): number {
        return this.total;
    }

    set Total(total: number) {
        this.total = total;
    }

    get DATE(): Date {
        return this.date;
    }

    set DATE(date: Date) {
        this.date = date;
    }

    get User(): UsersTable {
        return this.user;
    }

    set User(user: UsersTable) {
        this.user = user;
    }

    get Items(): ItemsEntity[] {
        return this.items;
    }

    set Items(items: ItemsEntity[]) {
        this.items = items;
    }
}
