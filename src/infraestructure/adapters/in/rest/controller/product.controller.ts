import { Controller, Get } from '@nestjs/common';
import { GetAllProductsUseCase } from 'src/infraestructure/ports/in/get-all-products.use-case';
import { ProductApiDocs } from '../configuration/product.api-docs';
import { ProductResponse } from './response/product.response';
import { plainToInstance } from 'class-transformer';

@ProductApiDocs.ApiTags
@Controller('product')
export class ProductController {
  constructor(private readonly getAllProductsUseCase: GetAllProductsUseCase) { }

  @Get('/all')
  @ProductApiDocs.GetAllProducts()
  async getAllProducts(): Promise<ProductResponse[]> {
    const products = await this.getAllProductsUseCase.execute();

    return plainToInstance(ProductResponse, products);
  }
}
