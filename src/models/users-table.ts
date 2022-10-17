import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class UsersTable {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name:string;

    @Column({
        unique:true
    })
    email:string

    @Column()
    password: string;

    @Column()
    role:string;

    @Column()
    balance:number


    get userID():number {
        return this.id;
    }

    set ID(id:number) {
        id = this.id;
    }

    get userName():string{
        return this.name
    }

    set setName(name:string){
        this.name = name;
    }

    get userEmail():string{
        return this.email;
    }

    set setEmail(email:string){
        this.email = email;
    }

    get userPassword():string {
        return this.password;
    }

    set setPassword(pass:any){
        this.password = pass
    }

    get userRole():string {
        return this.role;
    }

    set setRole(role:string){
        this.role = role;
    }

    get userBalance():number{
        return this.balance;
    }

    set setBalance(balance:number){
        this.balance = balance;
    }
}
