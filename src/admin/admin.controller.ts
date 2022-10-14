import { Controller, Render, Get, Post, Body, Redirect, UseInterceptors, UploadedFile } from '@nestjs/common';
import { ProductentityService } from 'src/services/products/productentity/productentity.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { Poductentity } from 'src/models/poductentity';
@Controller('admin')
export class AdminController {

    constructor(private products: ProductentityService) {

    }

    @Get()
    @Render('admin/index')
    async index() {
        const p = await this.products.getProducts();
        return {
            allProducts: p
        }
    }

    /*@Post('index')
    @UseInterceptors(FileInterceptor('image', { dest: './public/img' }))
    @Redirect('admin/index')
    async createProduct(@Body() body, @UploadedFile() file: Express.Multer.File) {
        let newProduct = new Poductentity();
        newProduct.img = file.filename
        newProduct.title = body.tite;
        newProduct.subtitle = body.subtitle;
        newProduct.price = body.price;
        newProduct.icon = body.icon;

        await this.products.createProduct(newProduct);


    }*/

}
