import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { join } from 'path';

export const dataBaseconfig: TypeOrmModuleOptions = {
  type: 'postgres',
  username: 'postgres',
  password: 'root',
  port: 5432,
  host: 'localhost',
  database: 'nest_demo',
  synchronize: true,
  entities: [join(__dirname, '../**/*.entity{.ts,.js}')],
};
