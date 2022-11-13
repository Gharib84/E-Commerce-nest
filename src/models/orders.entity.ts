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

    @OneToMany(() => ItemsEntity, (item) => item.order,{
        cascade: ['insert']
    })
    items: ItemsEntity[];



    constructor() {

    }


    get ID(): number {
        return this.id;
    }

    setID(id: number) {
        this.id = id;
    }

    get Total(): number {
        return this.total;
    }

    setTotal(total: number) {
        this.total = total;
    }

    get DATE(): string {
        return this.date.toISOString().split('T')[0];
    }

    setDATE(date: Date) {
        this.date = date;
    }

    get User(): UsersTable {
        return this.user;
    }

    setUser(user: UsersTable) {
        this.user = user;
    }

    get Items(): ItemsEntity[] {
        return this.items;
    }

    setItems(items: ItemsEntity[]) {
        this.items = items;
    }
}
