import { Module } from '@nestjs/common';
import { CartController } from './cart.controller';
import { ProductentityService } from 'src/services/products/productentity/productentity.service';
import { Poductentity } from 'src/models/poductentity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderService } from 'src/services/order/order.service';
import { OrdersEntity } from 'src/models/orders.entity';
import { UsersTable } from 'src/models/users-table';
import { UserService } from 'src/services/user/user.service';

@Module({
  controllers: [CartController],
  providers:[ProductentityService, OrderService, UserService],
  imports: [
    TypeOrmModule.forFeature([Poductentity, OrdersEntity,UsersTable])
]
})
export class CartModule {}
