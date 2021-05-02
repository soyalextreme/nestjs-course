import { Controller, Get, Param } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
    // static endpoints

    // dynamic endpoints

    @Get(':categoryId/products/:productId')
    getCategory(
        @Param('productId') productId: string,
        @Param('categoryId') categoryId: string,
    ): string {
        return `Category: ${categoryId}   Product: ${productId}`;
    }

    // query endpoints
}
