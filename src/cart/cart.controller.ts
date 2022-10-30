import { Controller,Get, Redirect, Post, Render, Req, Param, Body } from '@nestjs/common';
import { Poductentity } from 'src/models/poductentity';
import { ProductentityService } from 'src/services/products/productentity/productentity.service';

/**
 *@static properites read only to make overwiew about cart page
 */


@Controller('cart')
export class CartController {
    public readonly Cart:string = "Shopping Cart";

    constructor(private productService:ProductentityService ){

    }


    @Get()
    @Render('cart/index')
    async index(@Req() request: any){
        let total = 0;
        let productsInCart:Poductentity[];
        const productsInSession = request.session.products;
        if (productsInSession) {
            productsInCart = await this.productService.findByIds(Object.keys(productsInSession),);
            total = Poductentity.sumPricesByQuantities(productsInCart, productsInSession);
            
        }
        const viewData = [];
        viewData['productsInCart'] = productsInCart;
        return {
            //cart:this.Cart,
            cos: viewData,
        }
        console.log(productsInCart);
    }
}