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

    @Column()
    subtitle: string

    @Column()
    price: number

    @Column()
    icon: string
}
