import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}

    // static endpoints

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

    // dynamic endpoints

    // query endpoints
}
