import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('product')
export class ProductEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    price: number;

    @Column()
    stock: number;
}