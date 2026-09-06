
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
@Entity()
export class Employee {
    @PrimaryGeneratedColumn()
    tableId!: number;
    @Column({ nullable: true }) 
    employeeId!: string;
    
    @Column({ nullable: true }) 
    fullName!: string;
    
    @Column({ nullable: true }) 
    department!: number;
    
    @Column({ nullable: true }) 
    position!: string;
    
    @Column({ nullable: true }) 
    jobLevel!: number;
    
    @Column({ nullable: true }) 
    status!: number;
    
    @Column({ nullable: true }) 
    dateHired!: string;
    
    @Column({ nullable: true }) 
    dateSeparation!: string;
    
    @Column({ nullable: true }) 
    sssNumber!: string;
    
    @Column({ nullable: true }) 
    philHealthNumber!: string;
    
    @Column({ nullable: true }) 
    hdmfNumber!: string;
    
    @Column({ nullable: true }) 
    tin!: string;
    
    @Column({ nullable: true }) 
    bankAccountNumber!: string;
    
    @Column({ nullable: true }) 
    clockInTimeStr!: string;
    
    @Column({ nullable: true }) 
    clockOutTimeStr!: string;
    
    @Column({ nullable: true }) 
    monthlyBasicSalary!: number;
    
    @Column({ nullable: true }) 
    monthlyAllowances!: number;
    
    @Column({ nullable: true }) 
    personalEmail!: string;
    
    @Column({ nullable: true }) 
    personalMobileNumber!: string;
    
    @Column({ nullable: true }) 
    isActive!: number;
    
    @Column({ nullable: true }) 
    contactId!: number;
    
    @Column({ nullable: true }) 
    dependentId!: number;
    
}
