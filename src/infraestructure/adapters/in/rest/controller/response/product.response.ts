import { ApiProperty } from '@nestjs/swagger';

export class ProductResponse {
    @ApiProperty({ description: 'Unique product ID', example: '12345' })
    id: string;

    @ApiProperty({ description: 'Product name', example: 'Product A' })
    name: string;

    @ApiProperty({ description: 'Product description', example: 'This is a sample product' })
    description: string;

    @ApiProperty({ description: 'Product price', example: 99.99 })
    price: number;

    @ApiProperty({ description: 'Product stock', example: 50 })
    stock: number;
}
