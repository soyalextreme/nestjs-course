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
import { ProductsService } from '../services/products.service';

@Controller('products')
export class ProductsController {
    constructor(private productsService: ProductsService) {}

    // static endpoints

    @Get('filter')
    getFilterMsg(): string {
        return `Im a product filter`;
    }

    // dynamic endpoints

    @Get(':id')
    // @HttpCode(HttpStatus.ACCEPTED) // using decorator
    getOne(@Param('id') id: string) {
        // using express directly
        // response.status(200).send({
        //     id,
        // });

        return this.productsService.findOne(+id);
    }

    @Get()
    getFilter(
        @Query('limit') limit = 100,
        @Query('offset') offset = 0,
        @Query('brand') brand: string,
    ) {
        // return {
        //     msg: 'OK',
        //     data: {
        //         limit,
        //         offset,
        //         brand,
        //     },
        // };
        return this.productsService.findAll();
    }

    //* Create
    @Post()
    create(@Body() payload: any) {
        // return {
        //     msg: 'Create action',
        //     payload,
        // };
        return this.productsService.create(payload);;
    }

    //* Update
    @Put(':productId')
    update(@Param('productId') id: string, @Body() payload: any) {
        // return {
        //     id,
        //     payload,
        // };
        // return "funcionando"
        return this.productsService.update(+id, payload);
    }

    @Delete(':id')
    delete(@Param('id') id: number) {
        // return {
        //     id,
        // };
        return this.productsService.delete(id);
    }
}
