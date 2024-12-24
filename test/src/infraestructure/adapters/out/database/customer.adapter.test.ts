import { CustomerAdapter } from 'src/infraestructure/adapters/out/database/customer.adapter';
import { CustomerRepository } from 'src/infraestructure/adapters/out/database/repositories/customer.repository';
import { CustomerEntity } from 'src/infraestructure/adapters/out/database/entities/customer.entity';

describe('CustomerAdapter', () => {
    let customerAdapter: CustomerAdapter;
    let customerRepository: CustomerRepository;

    beforeEach(() => {
        customerRepository = {
            findByParams: jest.fn(),
            save: jest.fn()
        } as any;
        customerAdapter = new CustomerAdapter(customerRepository);
    });

    it('should return customer by id', async () => {
        const expectedCustomer = {
            id: 1,
            name: 'John Doe',
            email: 'john@example.com',
            address: 'Colombia'
        };

        (customerRepository.findByParams as jest.Mock).mockResolvedValue(expectedCustomer);

        const result = await customerAdapter.getCustomer({
            id: 1
        });

        expect(result).toEqual(expectedCustomer);
        expect(customerRepository.findByParams).toHaveBeenCalledWith({ id: 1 });
    });

    it('should save customer and return saved customer', async () => {
        const customerToSave = {
            name: 'John Doe',
            email: 'john@example.com',
            address: 'Colombia'
        };

        const savedCustomer = {
            id: 1,
            ...customerToSave
        };

        (customerRepository.save as jest.Mock).mockResolvedValue(savedCustomer);

        const result = await customerAdapter.saveCustomer(customerToSave);

        expect(result).toEqual(savedCustomer);
        expect(customerRepository.save).toHaveBeenCalledWith(expect.any(CustomerEntity));
        expect(customerRepository.save).toHaveBeenCalledWith(
            expect.objectContaining({
                name: customerToSave.name,
                email: customerToSave.email,
                address: customerToSave.address
            })
        );
    });
}); 