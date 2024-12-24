import { EntityManager, Repository } from "typeorm";
import { CustomerEntity } from "../entities/customer.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Customer } from "src/domain/customer";

export class CustomerRepository extends Repository<CustomerEntity> {
    constructor(
        @InjectRepository(CustomerEntity)
        customerRepository: Repository<CustomerEntity>,
        entityManager: EntityManager
    ) {
        super(customerRepository.target, entityManager, customerRepository.queryRunner)
    }

    async findByParams(params: Partial<Customer>) {
        return this.findOneBy(params)
    }
}