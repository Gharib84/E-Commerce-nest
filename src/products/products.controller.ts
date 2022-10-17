import { Controller, Get, Render, Param, Res } from '@nestjs/common';
import { ProductsService } from 'src/services/products/products.service';
import { ProductentityService } from 'src/services/products/productentity/productentity.service';
import { response } from 'express';

@Controller('products')
export class ProductsController {
    constructor(private readonly p: ProductsService, private contents: ProductentityService) {
        

    }

    @Get("/")
    @Render('products/index')
    async index() {
        const products = await this.contents.getProducts()
        return {
            products: products
        }
    }


    @Get(':id')
    async show(@Param() params: any, @Res() response){
        const p =  await this.contents.product(parseInt(params.id));
        if (p === undefined) {
            return response.redirect('/products');
        }
        return response.render('products/show',{
            product: p
        });
       
    }
}
