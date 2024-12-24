import { DataSource, DataSourceOptions } from 'typeorm';
import { runSeeders, SeederOptions } from 'typeorm-extension';
import { config } from 'dotenv';
import { MainSeeder } from './main.seeder';
import { ProductEntity } from '../entities/product.entity';
import { CustomerEntity } from '../entities/customer.entity';

config();

const options: DataSourceOptions & SeederOptions = {
    type: 'postgres',
    host: process.env.DB_HOST,
    port: +process.env.DB_PORT,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [ProductEntity, CustomerEntity],
    seeds: [MainSeeder]
};

const dataSource = new DataSource(options);

dataSource.initialize().then(async () => {
    await runSeeders(dataSource);
    process.exit();
}); 