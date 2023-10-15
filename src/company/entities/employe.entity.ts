import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Company } from './company.entity';

@Entity('EMPLOYEE')
export class Employee {
  @PrimaryGeneratedColumn()
  employeeId: string;

  @Column()
  name: string;

  @ManyToMany(() => Company, { cascade: true })
  @JoinTable()
  companies: Company[];
}
