import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CustomerPort } from "./ports/out/customer.port";
import { CustomerAdapter } from "./adapters/out/database/customer.adapter";
import { CustomerEntity } from "./adapters/out/database/entities/customer.entity";
import { CustomerController } from "./adapters/in/rest/controller/customer.controller";
import { GetCustomerUseCase } from "./ports/in/get-customer.use-case";
import { GetCustomer } from "src/application/use-cases/get-customer";
import { CustomerRepository } from "./adapters/out/database/repositories/customer.repository";

@Module({
    imports: [
        TypeOrmModule.forFeature([CustomerEntity])
    ],
    controllers: [CustomerController],
    providers: [
        {
            provide: GetCustomerUseCase,
            useClass: GetCustomer
        },
        {
            provide: CustomerPort,
            useClass: CustomerAdapter
        },
        CustomerRepository
    ],
})
export class CustomerModule { }