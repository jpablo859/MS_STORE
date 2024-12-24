import { Customer } from "src/domain/customer";

export abstract class GetCustomerUseCase {
    abstract excecute(customerId: number): Promise<Customer>
}