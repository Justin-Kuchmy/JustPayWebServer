import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
@Entity()
export class DepartmentBudget {
    @PrimaryGeneratedColumn()
    id!: number;
    
    @Column({ nullable: true }) 
    department!: number;

    @Column({ nullable: true }) 
    period_id!: number;

    @Column({ nullable: true }) 
    allocated_amount: number = 0.0;

    @Column({ nullable: true }) 
    notes!: string;


}
