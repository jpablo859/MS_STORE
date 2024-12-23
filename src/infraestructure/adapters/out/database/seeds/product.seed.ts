import { DataSource } from 'typeorm';
import { Seeder } from 'typeorm-extension';
import { ProductEntity } from '../entities/product.entity';

export class ProductSeeder implements Seeder {
    async run(dataSource: DataSource): Promise<void> {
        const repository = dataSource.getRepository(ProductEntity);

        const products = [
            {
                name: 'Laptop Gaming',
                description: 'Laptop para gaming de alta gama',
                price: 2500000,
                stock: 10
            },
            {
                name: 'Smartphone',
                description: 'Teléfono inteligente última generación',
                price: 1200000,
                stock: 15
            },
            {
                name: 'Tablet',
                description: 'Tablet para productividad',
                price: 800000,
                stock: 20
            }
        ];

        await repository.insert(products);
    }
} 