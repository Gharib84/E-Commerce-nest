import { Controller,Get, Render } from '@nestjs/common';
import { ProductsService } from 'src/services/products/products.service';

@Controller('products')
export class ProductsController {
    constructor(private readonly p:ProductsService){

    }

    @Get("/")
    @Render('products/index')
    index(){
        return {
            products: this.p.productsList()
        }
    }    
}
