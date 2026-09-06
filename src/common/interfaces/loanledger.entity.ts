
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
@Entity()
export class LoanLedger {
@PrimaryGeneratedColumn()
loanLedgerId!: number;
@Column({ nullable: true }) 
employeeId!: string;

@Column({ nullable: true }) 
loanType!: number;

@Column({ nullable: true }) 
principalAmount!: number;

@Column({ nullable: true }) 
loanDate!:	string;

@Column({ nullable: true }) 
NumOfAmortizations!: number;

@Column({ nullable: true }) 
deductionsPerPayroll!: number;

@Column({ nullable: true }) 
deductionFirstHalf!:  number;

@Column({ nullable: true }) 
deductionSecondHalf!: number;

@Column({ nullable: true }) 
status: number = 0;

}
