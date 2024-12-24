import { applyDecorators } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { CustomerResponse } from "../controller/response/customer.response";

export const CustomerApiDocs = {
    ApiTags: ApiTags('Customer'),

    GetCustomer: () =>
        applyDecorators(
            ApiOperation({
                summary: 'Get customer',
                description: 'Returns a customer by filter.',
            }),
            ApiResponse({
                status: 200,
                description: 'Customer single successfully obtained.',
                type: CustomerResponse,
            }),
            ApiResponse({
                status: 500,
                description: 'Internal Server Error.',
            }),
        ),
}