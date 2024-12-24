import { GetCustomer } from 'src/application/use-cases/get-customer';
import { CustomerPort } from 'src/infraestructure/ports/out/customer.port';

describe('GetCustomer', () => {
    let getCustomer: GetCustomer;
    let customerPort: CustomerPort;

    beforeEach(() => {
        customerPort = {
            getCustomer: jest.fn(),
            saveCustomer: jest.fn()
        };
        getCustomer = new GetCustomer(customerPort);
    });

    it('should return customer by id', async () => {
        const expectedCustomer = {
            id: 1,
            name: 'John Doe',
            email: 'john@example.com',
            address: 'Colombia'
        };

        (customerPort.getCustomer as jest.Mock).mockResolvedValue(expectedCustomer);

        const result = await getCustomer.excecute(1);

        expect(result).toEqual(expectedCustomer);
        expect(customerPort.getCustomer).toHaveBeenCalledWith({ id: 1 });
    });
}); 