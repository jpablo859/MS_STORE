import { Product } from "src/domain/product";

export abstract class ProductPort {
    abstract getAllProducts(): Promise<Product[]>
} 