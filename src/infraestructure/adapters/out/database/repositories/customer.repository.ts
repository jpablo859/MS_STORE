import { EntityManager, Repository } from "typeorm";
import { CustomerEntity } from "../entities/customer.entity";
import { InjectRepository } from "@nestjs/typeorm";

export class CustomerRepository extends Repository<CustomerEntity> {
    constructor(
        @InjectRepository(CustomerEntity)
        customerRepository: Repository<CustomerEntity>,
        entityManager: EntityManager
    ) {
        super(customerRepository.target, entityManager, customerRepository.queryRunner)
    }

    async findById(id: number) {
        return this.findOneBy({
            id
        })
    }
}