import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class EmergencyContact {
    @PrimaryGeneratedColumn()
    contactId!: number;
    
    @Column({ nullable: true }) 
    name!: string;
    
    @Column({ nullable: true }) 
    relation!: string;
    
    @Column({ nullable: true }) 
    address!: string;
    
    @Column({ nullable: true }) 
    contactNo!: string;
    

}