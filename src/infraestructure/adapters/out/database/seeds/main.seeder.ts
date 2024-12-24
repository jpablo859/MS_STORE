import { DataSource } from 'typeorm';
import { runSeeder, Seeder } from 'typeorm-extension';
import { ProductSeeder } from './product.seed';
import { CustomerSeeder } from './customer.seed';

export class MainSeeder implements Seeder {
    async run(dataSource: DataSource): Promise<void> {
        await runSeeder(dataSource, ProductSeeder);
        await runSeeder(dataSource, CustomerSeeder);
    }
} 