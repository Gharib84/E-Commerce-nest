import { Controller, Render, Get, Post, Body, Redirect, UseInterceptors, UploadedFile, Param, Res } from '@nestjs/common';
import { ProductentityService } from 'src/services/products/productentity/productentity.service';
import { Express, response } from 'express';
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

    @Get(':id')
    async edit(@Param() params: any, @Res() response) {
        const product = await this.products.product(parseInt(params.id));
        return response.render('admin/edit', {
            p: product
        })



    }

    @Post(':id/update')
    @UseInterceptors(FileInterceptor('image', { dest: './public/img/' }))
    @Redirect('http://localhost:3000/admin')
    async update(@Body() Body, @UploadedFile() file: Express.Multer.File, @Param() params: any) {
        const pro = await this.products.product(parseInt(params.id));
        if(file){
            pro.setImg(file.filename);

        }
        pro.setTtile(Body.title);
        pro.setSubTitle(Body.subtitle);
        pro.setPrice(Body.price);
        pro.icon =  "arrow.svg";
        await this.products.update(pro);
        


    }




}
