import { Customer } from "src/domain/customer";

export abstract class CustomerPort {
    abstract getCustomer(customerId: number): Promise<Customer>
}