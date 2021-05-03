import { Controller, Get, Param, Query, Post, Body } from '@nestjs/common';

@Controller('products')
export class ProductsController {
    // static endpoints

    @Get('filter')
    getFilterMsg(): string {
        return `Im a product filter`;
    }

    // dynamic endpoints

    @Get(':id')
    getOne(@Param('id') id: string): string {
        return `Product ${id}`;
    }

    // query endpoints

    @Get()
    getFilter(
        @Query('limit') limit = 100,
        @Query('offset') offset = 0,
        @Query('brand') brand: string,
    ) {
        return {
            msg: 'OK',
            data: {
                limit,
                offset,
                brand,
            },
        };
    }

    @Post()
    create(@Body() payload: any) {
        return {
            msg: 'Create action',
            payload,
        };
    }
}
