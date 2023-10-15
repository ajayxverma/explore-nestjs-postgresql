import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { dataBaseconfig } from './database/database-config';
import { SchoolModule } from './school/school.module';
import { CompanyModule } from './company/company.module';

@Module({
  imports: [TypeOrmModule.forRoot(dataBaseconfig), SchoolModule, CompanyModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
console.log(dataBaseconfig);
