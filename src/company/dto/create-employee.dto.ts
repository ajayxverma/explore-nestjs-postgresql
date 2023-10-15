import { Company } from '../entities/company.entity';

export class employeeDto {
  employeeId: string;
  name: string;
  companies: Company[];
}
