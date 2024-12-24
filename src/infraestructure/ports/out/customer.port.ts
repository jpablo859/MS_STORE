import { Customer } from "src/domain/customer";

export abstract class CustomerPort {
    abstract getCustomer(params: Partial<Customer>): Promise<Customer>
    abstract saveCustomer(customer: Customer): Promise<Customer>
}