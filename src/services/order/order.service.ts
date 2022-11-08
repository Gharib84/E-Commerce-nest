import { Injectable} from '@nestjs/common';
import { OrdersEntity } from 'src/models/orders.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

/**
 * @method createOrUpdateOrder that create new order
 */

@Injectable()
export class OrderService {


    constructor(@InjectRepository(OrdersEntity) private orderrepository: Repository<OrdersEntity>){

    }


   async createOrUpdateOrder(order:OrdersEntity):Promise<OrdersEntity>{
        return this.orderrepository.save(order);
    }
}
