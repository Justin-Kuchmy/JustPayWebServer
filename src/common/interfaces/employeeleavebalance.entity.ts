
import { Entity, PrimaryGeneratedColumn, Column, PrimaryColumn } from 'typeorm';
@Entity('employee_leave_balance')
export class EmployeeLeaveBalance {
    @PrimaryColumn()
    employee_id!: string;
    
    @PrimaryColumn()
    year!: number;
    
    @Column({ nullable: true }) 
    total_leave_earned!: number;
    
    @Column({ nullable: true }) 
    leave_used!: number;
    
}
