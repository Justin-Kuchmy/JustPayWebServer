
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
@Entity()
export class JournalEntry {
    @PrimaryGeneratedColumn()
    entryId!: number;
    @Column({ nullable: false })
    accountType!: string;

    @Column({ nullable: false })
    accountName!: string;

    @Column({ nullable: false })
    debit!: number;

    @Column({ nullable: false })
    credit!: number;

    @Column({ nullable: false })
    pay_period_date!:   string;

    @Column({ nullable: false })
    pay_period_half!:  number;
}
