
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
@Entity()
export class payroll_config {
    @PrimaryGeneratedColumn()
    id!: number;
    @Column({ nullable: false }) sss_schedule: number = 1;
    @Column({ nullable: false }) philhealth_schedule: number = 2;
    @Column({ nullable: false }) hdmf_schedule: number = 3;

    //CHECK (sss_schedule        IN (1, 2, 3)),
    //CHECK (philhealth_schedule IN (1, 2, 3)),
    //CHECK (hdmf_schedule       IN (1, 2, 3)) 

}

@Entity()
export class payroll_record {
@PrimaryGeneratedColumn()
id!: string;

@Column({ nullable: true }) 
employee_id!: string;

@Column({ nullable: true }) 
full_name!: string;

@Column({ nullable: true }) 
department!: string;

@Column({ nullable: true }) 
pay_period_date!: string;

@Column({ nullable: true }) 
pay_period_half!: number;

@Column({ nullable: true }) 
basic_salary!: number;

@Column({ nullable: true }) 
allowances!: number;

@Column({ nullable: true }) 
overtime_pay!: number;

@Column({ nullable: true }) 
adjustments!: number;

@Column({ nullable: true }) 
gross_income!: number;

@Column({ nullable: true }) 
sss_premium_ee!: number;

@Column({ nullable: true }) 
philhealth_premium_ee!: number;

@Column({ nullable: true }) 
hdmf_premium_ee!: number;

@Column({ nullable: true }) 
loan_deductions!: number;

@Column({ nullable: true }) 
withholding_tax!: number;

@Column({ nullable: true }) 
total_deductions!: number;

@Column({ nullable: true }) 
net_pay!: number;

@Column({ nullable: true }) 
created_at!: string;

@Column({ nullable: true }) 
sss_premium_er!: number;

@Column({ nullable: true }) 
philhealth_premium_er!: number;

@Column({ nullable: true }) 
hdmf_premium_er!: number;

}

