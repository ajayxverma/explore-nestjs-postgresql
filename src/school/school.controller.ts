import { Controller, Get } from '@nestjs/common';
import { SchoolService } from './school.service';

@Controller('/school')
export class SchoolControler {
  constructor(private readonly schoolService: SchoolService) {}

  @Get('/hello')
  getHello(): string {
    return this.schoolService.getHello();
  }
}
