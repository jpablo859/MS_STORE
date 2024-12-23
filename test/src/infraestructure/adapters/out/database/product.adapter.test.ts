import { ProductAdapter } from 'src/infraestructure/adapters/out/database/product.adapter';
import { ProductRepository } from 'src/infraestructure/adapters/out/database/repositories/product.repository';

describe('ProductAdapter', () => {
    let productAdapter: ProductAdapter;
    let productRepository: ProductRepository;

    beforeEach(() => {
        productRepository = {
            getAllProductsWithStock: jest.fn()
        } as any;
        productAdapter = new ProductAdapter(productRepository);
    });

    it('should return all products with stock', async () => {
        const expectedProducts = [
            { id: 1, name: 'Product 1', description: 'Description 1', price: 100, stock: 10 }
        ];

        (productRepository.getAllProductsWithStock as jest.Mock).mockResolvedValue(expectedProducts);

        const result = await productAdapter.getAllProducts();

        expect(result).toEqual(expectedProducts);
        expect(productRepository.getAllProductsWithStock).toHaveBeenCalled();
    });
}); 