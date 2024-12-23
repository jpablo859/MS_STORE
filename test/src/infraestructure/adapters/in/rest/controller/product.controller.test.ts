import { ProductController } from 'src/infraestructure/adapters/in/rest/controller/product.controller';
import { GetAllProducts } from 'src/application/use-cases/get-all-products';
import { ProductResponse } from 'src/infraestructure/adapters/in/rest/controller/response/product.response';
import { ProductPort } from 'src/infraestructure/ports/out/product.port';

describe('ProductController', () => {
    let productController: ProductController;
    let getAllProducts: GetAllProducts;
    let productPort: ProductPort;

    beforeEach(() => {
        productPort = {
            getAllProducts: jest.fn()
        };
        getAllProducts = new GetAllProducts(productPort);
        productController = new ProductController(getAllProducts);
    });

    it('should return all products', async () => {
        const expectedProducts = [
            {
                id: 1,
                name: 'Product 1',
                description: 'Description 1',
                price: 100,
                stock: 10
            }
        ];

        (productPort.getAllProducts as jest.Mock).mockResolvedValue(expectedProducts);

        const result = await productController.getAllProducts();

        expect(result).toBeInstanceOf(Array);
        expect(result[0]).toBeInstanceOf(ProductResponse);
        expect(productPort.getAllProducts).toHaveBeenCalled();
    });
}); 