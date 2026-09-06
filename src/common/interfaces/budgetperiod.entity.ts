import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class BudgetPeriod {
    @PrimaryGeneratedColumn()
    id!: number;
    
    @Column({ nullable: true }) 
    label!: string;

    @Column({ nullable: true }) 
    year!: number;

    @Column({ nullable: true }) 
    half!: number;

    @Column({ nullable: true }) 
    start_date!: string;

    @Column({ nullable: true }) 
    end_date!: string;

}
