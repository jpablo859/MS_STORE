import { Injectable } from '@nestjs/common';
import { Product } from 'src/domain/product';
import { GetAllProductsUseCase } from 'src/infraestructure/ports/in/get-all-products.use-case';
import { ProductPort } from 'src/infraestructure/ports/out/product.port';

@Injectable()
export class GetAllProducts implements GetAllProductsUseCase {
    constructor(
        private readonly productPort: ProductPort,
    ) { }

    async execute(): Promise<Product[]> {
        return this.productPort.getAllProducts();
    }
}
