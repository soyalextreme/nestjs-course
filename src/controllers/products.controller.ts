import {
    Controller,
    Get,
    Param,
    Query,
    Post,
    Body,
    Put,
    Delete,
    HttpStatus,
    HttpCode,
    Res,
} from '@nestjs/common';

import { Response } from 'express';

@Controller('products')
export class ProductsController {
    // static endpoints

    @Get('filter')
    getFilterMsg(): string {
        return `Im a product filter`;
    }

    // dynamic endpoints

    @Get(':id')
    @HttpCode(HttpStatus.ACCEPTED) // using decorator
    getOne(@Res() response: Response, @Param('id') id: string) {
        // using express directly
        response.status(200).send({
            id,
        });
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

    @Put(':productId')
    update(@Param('productId') id: number, @Body() payload: any) {
        return {
            id,
            payload,
        };
    }

    @Delete(':id')
    delete(@Param('id') id: number) {
        return {
            id,
        };
    }
}
