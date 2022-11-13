import { Injectable } from '@nestjs/common';
import { OrdersEntity } from 'src/models/orders.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

/**
 * @method createOrUpdateOrder that create new order
 * @method findUser that find specific user by his id
 */

@Injectable()
export class OrderService {

    
    constructor(@InjectRepository(OrdersEntity) private orderrepository: Repository<OrdersEntity>) {

    }


    async createOrUpdateOrder(order: OrdersEntity): Promise<OrdersEntity> {
        return this.orderrepository.save(order);
    }

      async FindUser(id:number):Promise<OrdersEntity[]>{
        return this.orderrepository.find({
            where: {
                user: { id: id },
                },
                relations: ['items', 'items.product'],
        })
    }

}
