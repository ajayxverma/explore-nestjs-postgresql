import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Student } from 'src/entities/student.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SchoolService {
  constructor(
    /* @InjectRepository(Student) */
    /* private student: Repository<Student>, */
  ) {}
  getHello(): string {
    return 'School Module';
  }
}
