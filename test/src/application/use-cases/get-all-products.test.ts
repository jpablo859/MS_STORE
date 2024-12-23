// Generated by Qodo Gen

import { GetAllProducts } from "src/application/use-cases/get-all-products";
import { ProductPort } from "src/infraestructure/ports/out/product.port";


describe('GetAllProducts', () => {
    let getAllProducts: GetAllProducts;
    let productPort: ProductPort;

    beforeEach(() => {
        productPort = {
            getAllProducts: jest.fn()
        };
        getAllProducts = new GetAllProducts(productPort);
    });

    it('should return all products', async () => {
        const expectedProducts = [
            { id: 1, name: 'Product 1', description: 'Description 1', price: 100, stock: 10 }
        ];

        (productPort.getAllProducts as jest.Mock).mockResolvedValue(expectedProducts);

        const result = await getAllProducts.execute();

        expect(result).toEqual(expectedProducts);
        expect(productPort.getAllProducts).toHaveBeenCalled();
    });
});
