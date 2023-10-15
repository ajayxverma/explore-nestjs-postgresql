import { Injectable } from '@nestjs/common';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { Company } from './entities/company.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Employee } from './entities/employe.entity';
import { employeeDto } from './dto/create-employee.dto';

@Injectable()
export class CompanyService {
  constructor(
    @InjectRepository(Company)
    private company: Repository<Company>,

    @InjectRepository(Employee)
    private employee: Repository<Employee>,
  ) {}

  async create(createEmployee: employeeDto) {
    console.log(`Employee: ${JSON.stringify(createEmployee)}`);
    const newEmployee = new Employee();
    newEmployee.name = createEmployee.name;
    const companieslist: Company[] = [];
    /*   const newCompany1 = new Company();
    const newCompany2 = new Company();

    newCompany1.name = 'google';
    newCompany1.type = 'Software';

    newCompany2.name = 'Capgini';
    newCompany2.type = 'Capgini'; */

    createEmployee.companies.forEach((companyName) => {
      const company = new Company();
      company.name = companyName.name;
      company.type = companyName.type;
      companieslist.push(company);
    });
    newEmployee.companies = companieslist;
    /* newCompany.name = createCompanyDto.name;
    newCompany.type = createCompanyDto.type; */
    /* const newCompanyCreated = this.company.create(newEmployee); */
    await this.employee.save(newEmployee);
    return `Company ${newEmployee.name} Crated`;
  }

  async findAll() {
    return await this.employee.find({ relations: ['companies'] });
  }

  findOne(id: number) {
    return `This action returns a #${id} company`;
  }

  update(id: number, updateCompanyDto: UpdateCompanyDto) {
    return `This action updates a #${id} company`;
  }

  remove(id: number) {
    return `This action removes a #${id} company`;
  }
}
