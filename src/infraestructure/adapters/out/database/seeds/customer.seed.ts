import { DataSource } from 'typeorm';
import { Seeder } from 'typeorm-extension';
import { CustomerEntity } from '../entities/customer.entity';

export class CustomerSeeder implements Seeder {
    async run(dataSource: DataSource): Promise<void> {
        const repository = dataSource.getRepository(CustomerEntity);

        const customers = [
            {
                name: 'John Doe',
                email: 'johndoe@mail.com',
                address: 'Colombia'
            },
        ];

        await repository.insert(customers);
    }
} 