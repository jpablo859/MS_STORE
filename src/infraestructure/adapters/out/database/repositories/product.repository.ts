import { Repository, MoreThan, EntityManager } from "typeorm";
import { ProductEntity } from "../entities/product.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Injectable } from "@nestjs/common";

@Injectable()
export class ProductRepository extends Repository<ProductEntity> {
    constructor(
        @InjectRepository(ProductEntity) productRepository: Repository<ProductEntity>,
        entityManager: EntityManager
    ) {
        super(productRepository.target, entityManager, productRepository.queryRunner)
    }

    async getAllProductsWithStock(): Promise<ProductEntity[]> {
        return this.find({
            where: {
                stock: MoreThan(0)
            }
        });
    }
}