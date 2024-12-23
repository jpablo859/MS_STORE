import { Module } from '@nestjs/common';
import { ProductController } from './adapters/in/rest/controller/product.controller';
import { GetAllProductsUseCase } from './ports/in/get-all-products.use-case';
import { GetAllProducts } from 'src/application/use-cases/get-all-products';
import { ProductPort } from './ports/out/product.port';
import { ProductAdapter } from './adapters/out/database/product.adapter';
import { ProductRepository } from './adapters/out/database/repositories/product.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductEntity } from './adapters/out/database/entities/product.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([ProductEntity])
  ],
  controllers: [ProductController],
  providers: [
    {
      provide: GetAllProductsUseCase,
      useClass: GetAllProducts
    },
    {
      provide: ProductPort,
      useClass: ProductAdapter
    },
    ProductRepository
  ],
  exports: [GetAllProductsUseCase]
})
export class ProductModule { }
