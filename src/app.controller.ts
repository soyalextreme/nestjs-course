import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}

    @Get()
    getHello(): string {
        return 'Hola mundo';
    }

    @Get('new')
    newEndpoint(): string {
        return 'Yo soy nuevo';
    }

    @Get('/ruta/')
    hello(): string {
        return 'con /sas/';
    }

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
}
