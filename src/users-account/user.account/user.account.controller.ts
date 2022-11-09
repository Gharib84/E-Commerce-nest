import { Controller, Get, Req, Render } from '@nestjs/common';
import { request } from 'http';
import { OrderService } from 'src/services/order/order.service';
import { Any } from 'typeorm';
@Controller('account')
export class UserAccountController {
    public title:string = "My Orders";
    public subtitle:string = "My Orders That I orderd Today";

    constructor(private orderservice:OrderService){

    }

    @Get('orders')
    @Render('account/order')
    async order(@Req() request){
        return {
            title: this.title,
            subtitle: this.subtitle,
            orders: this.orderservice.FindUser(request.session.user.id)
        }
    }
}
