import { Product } from "src/domain/product";

export abstract class GetAllProductsUseCase {
    abstract execute(): Promise<Product[]>
}