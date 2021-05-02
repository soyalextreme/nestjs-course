import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}

    @Get()
    getHello(): string {
        return 'Hola mundo';
    }

    // static endpoints

    @Get('new')
    newEndpoint(): string {
        return 'Yo soy nuevo';
    }

    @Get('/ruta/')
    hello(): string {
        return 'con /sas/';
    }

    @Get('products/filter')
    getProductFilter(): string {
        return `Im a product filter`;
    }

    // dynamic endpoints

    @Get('products/:id')
    getProduct(@Param('id') id: string): string {
        return `Product ${id}`;
    }

    @Get('categories/:categoryId/products/:productId')
    getCategory(
        @Param('productId') productId: string,
        @Param('categoryId') categoryId: string,
    ): string {
        return `Category: ${categoryId}   Product: ${productId}`;
    }

    // query endpoints

    @Get('products')
    getProducts(
        @Query('limit') limit = 100,
        @Query('offset') offset = 0,
        @Query('brand') brand: string,
    ) {
        return `products limit: ${limit} offset: ${offset} Brand: ${brand}`;
    }
}
