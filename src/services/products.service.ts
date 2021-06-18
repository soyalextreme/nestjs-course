import { Injectable } from '@nestjs/common';
import { Product } from '../entities/product.entity';

@Injectable()
export class ProductsService {
    private counterId = 1;

    private products: Array<Product> = [
        {
            id: 1,
            name: 'Product 1',
            description: 'crazy description',
            price: 122,
            stock: 10,
            image: 'https://randomimage.com',
        },
    ];

    findAll() {
        return this.products;
    }

    findOne(id: number) {
        return this.products.find((item) => item.id === id);
    }

    create(payload: any) {
        this.counterId += 1;
        const newProduct = {
            id: this.counterId,
            ...payload,
        };

        this.products.push(newProduct);
        return newProduct;
    }

    delete(id: number) {
        const filterArr = this.products.filter((product) => product.id !== id);
        this.products = filterArr;
        return filterArr;
    }

    update(id: number, payload: any) {
        this.products.map((item) => {
            if (item.id === id) {
                item = {
                    id,
                    ...payload,
                };
            }
        });
    }
}
