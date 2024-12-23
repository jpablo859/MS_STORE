import { DataSource } from 'typeorm';
import { runSeeder, Seeder } from 'typeorm-extension';
import { ProductSeeder } from './product.seed';

export class MainSeeder implements Seeder {
    async run(dataSource: DataSource): Promise<void> {
        await runSeeder(dataSource, ProductSeeder);
    }
} 