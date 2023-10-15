// user.entity.ts
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('COURSE')
export class Course {
  @PrimaryGeneratedColumn()
  coruseId: number;

  @Column()
  courseName: string;

  @Column()
  subject: string;
}
