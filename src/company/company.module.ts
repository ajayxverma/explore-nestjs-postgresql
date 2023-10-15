import { Module } from '@nestjs/common';
import { CompanyService } from './company.service';
import { CompanyController } from './company.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Company } from './entities/company.entity';
import { Employee } from './entities/employe.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Company, Employee])],
  controllers: [CompanyController],
  providers: [CompanyService],
})
export class CompanyModule {}
