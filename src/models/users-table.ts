import { Entity, Column, PrimaryGeneratedColumn, OneToMany} from "typeorm";
import { OrdersEntity } from "./orders.entity";

@Entity()
export class UsersTable {
    @PrimaryGeneratedColumn()
    id: number;

    @Column("varchar")
    name: string;

    @Column({
        unique: true
    })
    email: string

    @Column()
    password: string;

    @Column()
    role: string;

    @Column()
    balance: number

    @OneToMany(()=> OrdersEntity, (order)=> order.user)
    orders:OrdersEntity[];


    get userID(): number {
        return this.id;
    }

    setID(id: number) {
        id = this.id;
    }

    get userName(): string {
        return this.name
    }

    setName(n: string) {
        this.name = n;
    }

    get userEmail(): string {
        return this.email;
    }

    setEmail(email: string) {
        this.email = email;
    }

    get userPassword(): string {
        return this.password;
    }

    setPassword(pass: any) {
        this.password = pass
    }

    get userRole(): string {
        return this.role;
    }

    setRole(role: string) {
        this.role = role;
    }

    get userBalance(): number {
        return this.balance;
    }

    setBalance(balance: number) {
        this.balance = balance;
    }

    get Orders():OrdersEntity[]{
        return this.orders;
    }

    set Orders(orders:OrdersEntity[]){
        this.orders = orders;
    }
}
