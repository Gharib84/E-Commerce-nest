import { Controller, Get, Render, Param } from '@nestjs/common';
import { ProductsService } from 'src/services/products/products.service';

@Controller('products')
export class ProductsController {
    constructor(private readonly p: ProductsService) {

    }

    @Get("/")
    @Render('products/index')
    index() {
        return {
            products: this.p.productsList()
        }
    }


    @Get(':id')
    @Render('products/show')
    show(@Param() param) {
        let specificProduct = this.p.getProductById(parseInt(param.id));

        return {
            product: specificProduct
        }
         
    }
}
