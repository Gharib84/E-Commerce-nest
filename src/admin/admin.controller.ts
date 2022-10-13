import { Controller, Render, Get } from '@nestjs/common';
import { ProductentityService } from 'src/services/products/productentity/productentity.service';
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


}
