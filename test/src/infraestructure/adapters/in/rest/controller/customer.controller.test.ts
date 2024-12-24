import { CustomerController } from 'src/infraestructure/adapters/in/rest/controller/customer.controller';
import { GetCustomerUseCase } from 'src/infraestructure/ports/in/get-customer.use-case';
import { CustomerResponse } from 'src/infraestructure/adapters/in/rest/controller/response/customer.response';

describe('CustomerController', () => {
    let customerController: CustomerController;
    let getCustomerUseCase: GetCustomerUseCase;

    beforeEach(() => {
        getCustomerUseCase = {
            excecute: jest.fn()
        };
        customerController = new CustomerController(getCustomerUseCase);
    });

    it('should return customer by id', async () => {
        const expectedCustomer = {
            id: 1,
            name: 'John Doe',
            email: 'john@example.com',
            address: 'Colombia'
        };

        (getCustomerUseCase.excecute as jest.Mock).mockResolvedValue(expectedCustomer);

        const result = await customerController.getCustomer(1);

        expect(result).toBeInstanceOf(CustomerResponse);
        expect(result.id).toBe(expectedCustomer.id);
        expect(result.name).toBe(expectedCustomer.name);
        expect(result.email).toBe(expectedCustomer.email);
        expect(result.address).toBe(expectedCustomer.address);
        expect(getCustomerUseCase.excecute).toHaveBeenCalledWith(1);
    });
}); 