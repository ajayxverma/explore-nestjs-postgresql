import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('COMPANY')
export class Company {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column({ default: 'Software' })
  type: string;
}
