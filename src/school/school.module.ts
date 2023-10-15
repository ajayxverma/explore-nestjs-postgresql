import { Module } from '@nestjs/common';
import { SchoolControler } from './school.controller';
import { SchoolService } from './school.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Course } from 'src/entities/course.entity';
import { Student } from 'src/entities/student.entity';

@Module({
  imports: [/* TypeOrmModule.forFeature([Course, Student]) */],
  controllers: [SchoolControler],
  providers: [SchoolService],
})
export class SchoolModule {}
