// user.entity.ts
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Course } from './course.entity';
import { type } from 'os';

@Entity('STUDENT')
export class Student {
  @PrimaryGeneratedColumn()
  studentId: number;

  @Column()
  studentName: string;

  @Column()
  age: string;

  @ManyToMany(() => Course)
  @JoinTable()
  course: Course[];
}
