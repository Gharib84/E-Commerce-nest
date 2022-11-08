import { Controller, Get, Redirect, Post, Render, Req, Param, Body, Res } from '@nestjs/common';
import { Poductentity } from 'src/models/poductentity';
import { ProductentityService } from 'src/services/products/productentity/productentity.service';
import { OrdersEntity } from 'src/models/orders.entity';
import { ItemsEntity } from 'src/models/items.entity';
import { OrderService } from 'src/services/order/order.service';
import { UserService } from 'src/services/user/user.service';
import { request } from 'http';
/**
 *@static properites read only to make overwiew about cart page
  @method index that create product session and insert product's id to database 
 */


@Controller('cart')
export class CartController {
    public readonly Cart: string = "Shopping Cart";
    public Purchase:string = " The Purchase";
    public subtitle: string = "Purchase Status";


    constructor(private productService: ProductentityService, private user:UserService,private order:OrderService) {

    }


    @Get()
    @Render('cart/index')
    async index(@Req() request: any) {
        let total = 0;
        let productsInCart: Poductentity[];
        const productsInSession = request.session.products;
        if (productsInSession) {
            productsInCart = await this.productService.findByIds(Object.keys(productsInSession),);
            total =  Poductentity.sumPricesByQuantities(productsInCart, productsInSession);

        }
        return {
            products:productsInCart,
            total:total
        }

        
    }


    @Post('add/:id')
    @Redirect('http://localhost:3000/cart/')
    add(@Param() param, @Body() body: any, @Req() request: any) {
        let productsInSession = request.session.products;
        if (!productsInSession) {
            productsInSession = {}
            
        }

        productsInSession[param.id] = body.quantity;
        request.session.products = productsInSession;


    }

    @Get('delete')
    @Redirect('http://localhost:3000/cart')
    delete(@Req() request: any){
        request.session.products = null;

    }

    @Get('purchase')
    async purchase(@Req() request: any, @Res() response: any){
        if (!request.session.user) {
            response.redirect('auth/login');
            
        } else if (!request.session.products) {
            response.redirect('/cart');
        } else {
            const user = await this.user.FindUser(request.session.user.id);
            const productsInSession = request.session.products;
            const productsInCart = await this.productService.findByIds(Object.keys(productsInSession),);
            let total = 0;
            const items:ItemsEntity[] = [];
            for (let i = 0; i < productsInCart.length; i++) {
                const quantity = productsInSession[productsInCart[i].productID];
                const item:ItemsEntity = new ItemsEntity();
                item.SetQuntity(quantity);
                item.setPrice(productsInCart[i].ProductPrice);
                item.setProduct(productsInCart[i]);
                items.push(item);
                total = total + productsInCart[i].ProductPrice;    
                
            }

            //our order;
            const order:OrdersEntity = new OrdersEntity();
            order.setTotal(total);
            order.setItems(items);
            order.setUser(user);

            const ourOrder = await this.order.createOrUpdateOrder(order);

            const balance = user.balance - total;
            await this.user.updateBalance(user.userID,balance);

            request.session.products = null;



            const view:Object = {
                title: this.Purchase,
                subtitle: this.subtitle,
                id: ourOrder.ID

            };

            return response.render('cart/purchase',view);




        }



    }

   
}