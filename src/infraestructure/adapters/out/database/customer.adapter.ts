import { Customer } from "src/domain/customer";
import { CustomerPort } from "src/infraestructure/ports/out/customer.port";
import { CustomerRepository } from "./repositories/customer.repository";
import { plainToInstance } from "class-transformer";
import { Injectable } from "@nestjs/common";
import { CustomerEntity } from "./entities/customer.entity";

@Injectable()
export class CustomerAdapter implements CustomerPort {
    constructor(
        private readonly customerRepository: CustomerRepository,
    ) { }

    async getCustomer(params: Partial<Customer>): Promise<Customer> {
        const customer = await this.customerRepository.findByParams(params);

        return plainToInstance(Customer, customer)
    }

    async saveCustomer(customer: Customer): Promise<Customer> {
        const customerEntity = plainToInstance(CustomerEntity, customer);
        const customerSaved = await this.customerRepository.save(customerEntity);

        return plainToInstance(Customer, customerSaved);
    }
}