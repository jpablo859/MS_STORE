import { Injectable } from "@nestjs/common";
import { Product } from "src/domain/product";
import { ProductPort } from "src/infraestructure/ports/out/product.port";
import { ProductRepository } from "./repositories/product.repository";
import { plainToInstance } from "class-transformer";

@Injectable()
export class ProductAdapter implements ProductPort {
    constructor(
        private readonly productRepository: ProductRepository,
    ) { }

    async getAllProducts(): Promise<Product[]> {
        const products = await this.productRepository.getAllProductsWithStock();

        return plainToInstance(Product, products);
    }
}