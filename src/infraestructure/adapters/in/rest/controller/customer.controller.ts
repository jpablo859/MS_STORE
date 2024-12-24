import { Controller, Get, Param, ParseIntPipe } from "@nestjs/common";
import { CustomerApiDocs } from "../configuration/customer.api-docs";
import { CustomerResponse } from "./response/customer.response";
import { GetCustomerUseCase } from "src/infraestructure/ports/in/get-customer.use-case";
import { plainToInstance } from "class-transformer";

@CustomerApiDocs.ApiTags
@Controller('customer')
export class CustomerController {
    constructor(
        private readonly getCustomerUseCase: GetCustomerUseCase
    ) { }
    @Get(':id')
    @CustomerApiDocs.GetCustomer()
    async getCustomer(
        @Param('id', ParseIntPipe) customerId: number
    ): Promise<CustomerResponse> {
        const customer = await this.getCustomerUseCase.excecute(customerId);

        return plainToInstance(CustomerResponse, customer);
    }


}