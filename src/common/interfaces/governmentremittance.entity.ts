
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
@Entity('government_remittance')
export class GovernmentRemittance {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ nullable: true }) 
    payroll_calculation_results_id!:	number;
    
    @Column({ nullable: true }) 
    employee_id!:	string;
    
    @Column({ nullable: true }) 
    full_name!:	string;
    
    @Column({ nullable: true }) 
    employee_department!:	number;
    
    @Column({ nullable: true }) 
    pay_period_date!:	string;
    
    @Column({ nullable: true }) 
    pay_period_half!:	number;
    
    @Column({ nullable: true }) 
    employee_Contrib!:	number;
    
    @Column({ nullable: true }) 
    employer_Contrib!:	number;
    
    @Column({ nullable: true }) 
    total_Contrib!:	number;
    
    @Column({ nullable: true }) 
    remittance_type!:	number;
    
    @Column({ nullable: true }) 
    submission_status!:	number;
    
    @Column({ nullable: true }) 
    withholding_tax!:	number;
    
    @Column({ nullable: true }) 
    withholding_tax_submission_status!:	number;
    
    @Column({ nullable: true }) 
    last_submitted_date!:	string;
    
    @Column({ nullable: true }) 
    submitted_by_user_id!:	number;
    
    @Column({ nullable: true }) 
    date_created!:	string;
    
    @Column({ nullable: true }) 
    date_modified!:	string;
    
}