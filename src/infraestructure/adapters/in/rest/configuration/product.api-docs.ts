import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { applyDecorators } from '@nestjs/common';
import { ProductResponse } from '../controller/response/product.response';

export const ProductApiDocs = {
  ApiTags: ApiTags('Product'),

  GetAllProducts: () =>
    applyDecorators(
      ApiOperation({
        summary: 'Get all products',
        description: 'Returns a list of all products available in the system.',
      }),
      ApiResponse({
        status: 200,
        description: 'Product list successfully obtained.',
        type: [ProductResponse],
      }),
      ApiResponse({
        status: 500,
        description: 'Internal Server Error.',
      }),
    ),
};
