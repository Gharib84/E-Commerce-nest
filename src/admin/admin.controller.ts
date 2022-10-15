import { Controller, Render, Get, Post, Body, Redirect, UseInterceptors, UploadedFile, Param } from '@nestjs/common';
import { ProductentityService } from 'src/services/products/productentity/productentity.service';
import { Express } from 'express';
import { FileInterceptor } from '@nestjs/platform-express';
import { Poductentity } from 'src/models/poductentity';
import { parse } from 'path/posix';
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

    @Post('store')
    @UseInterceptors(FileInterceptor('image', { dest: './public/img/' }))
    @Redirect('http://localhost:3000/admin')
    async createProduct(@Body() body, @UploadedFile() file: Express.Multer.File) {
        let newProduct = new Poductentity();
        newProduct.setImg(file.filename);
        newProduct.setTtile(body.title);
        newProduct.setSubTitle(body.subtitle);
        newProduct.setPrice(body.price);
        newProduct.icon = "arrow.svg";
        await this.products.createProduct(newProduct);


    }

    @Post(':id')
    @Redirect('http://localhost:3000/admin')
    deleteProduct(@Param('id') id: string) {
        return this.products.deleteProduct(parseInt(id))

    }

    

}
