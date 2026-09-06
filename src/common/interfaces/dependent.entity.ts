import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
@Entity()
export class Dependent {
    @PrimaryGeneratedColumn()
    dependentId!: number;
    
    @Column({ nullable: true }) 
    name!: string;

    @Column({ nullable: true }) 
    relation!: string;

    @Column({ nullable: true }) 
    birthday!: string;

}
