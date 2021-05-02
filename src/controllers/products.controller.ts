import { Controller, Get, Param, Query } from '@nestjs/common';

@Controller('products')
export class ProductsController {
    // static endpoints

    @Get('filter')
    getProductFilter(): string {
        return `Im a product filter`;
    }

    // dynamic endpoints

    @Get(':id')
    getProduct(@Param('id') id: string): string {
        return `Product ${id}`;
    }

    // query endpoints

    @Get()
    getProducts(
        @Query('limit') limit = 100,
        @Query('offset') offset = 0,
        @Query('brand') brand: string,
    ) {
        return `products limit: ${limit} offset: ${offset} Brand: ${brand}`;
    }
}
