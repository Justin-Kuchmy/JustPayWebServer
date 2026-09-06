import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm';

//matches a table
@Entity() 
export class AttendanceLog {
    @PrimaryGeneratedColumn()
    logId!: number;
    
    @Column({ nullable: true }) 
    employeeId!: string;
    
    @Column({ nullable: true }) 
    log_date!: string;
    
    @Column({ nullable: true }) 
    late_min!: number;
    
    @Column({ nullable: true }) 
    undertime_min!: number;
    
    @Column({ nullable: true }) 
    overtime_min!: number;
    
    @Column({ default: 0 })
    absent!: number;
    
    @Column({ nullable: true }) 
    notes!: string;
    
    @Column({ nullable: true }) 
    overtime_json!: string;

}

