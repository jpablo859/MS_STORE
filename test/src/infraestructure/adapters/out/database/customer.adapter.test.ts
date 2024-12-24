import { CustomerAdapter } from 'src/infraestructure/adapters/out/database/customer.adapter';
import { CustomerRepository } from 'src/infraestructure/adapters/out/database/repositories/customer.repository';

describe('CustomerAdapter', () => {
    let customerAdapter: CustomerAdapter;
    let customerRepository: CustomerRepository;

    beforeEach(() => {
        customerRepository = {
            findById: jest.fn()
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

        (customerRepository.findById as jest.Mock).mockResolvedValue(expectedCustomer);

        const result = await customerAdapter.getCustomer(1);

        expect(result).toEqual(expectedCustomer);
        expect(customerRepository.findById).toHaveBeenCalledWith(1);
    });
}); 