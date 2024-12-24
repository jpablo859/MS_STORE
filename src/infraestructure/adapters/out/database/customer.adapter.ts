import { Customer } from "src/domain/customer";
import { CustomerPort } from "src/infraestructure/ports/out/customer.port";
import { CustomerRepository } from "./repositories/customer.repository";
import { plainToInstance } from "class-transformer";
import { Injectable } from "@nestjs/common";

@Injectable()
export class CustomerAdapter implements CustomerPort {
    constructor(
        private readonly customerRepository: CustomerRepository,
    ) { }

    async getCustomer(customerId: number): Promise<Customer> {
        console.log(customerId)
        const customer = await this.customerRepository.findById(customerId);

        return plainToInstance(Customer, customer)
    }
}