import { Injectable } from '@nestjs/common';
import { Customer } from 'src/domain/customer';
import { GetCustomerUseCase } from 'src/infraestructure/ports/in/get-customer.use-case';
import { CustomerPort } from 'src/infraestructure/ports/out/customer.port';

@Injectable()
export class GetCustomer implements GetCustomerUseCase {
    constructor(
        private readonly customerPort: CustomerPort,
    ) { }

    async excecute(customerId: number): Promise<Customer> {
        return this.customerPort.getCustomer(customerId);
    }
}