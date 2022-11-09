import { Module } from '@nestjs/common';
import { UserAccountController } from './user.account/user.account.controller';
import { OrderService } from 'src/services/order/order.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrdersEntity } from 'src/models/orders.entity';
import { ItemsEntity } from 'src/models/items.entity';
import { Poductentity } from 'src/models/poductentity'; 



@Module({
  controllers: [UserAccountController],
  providers:[OrderService],
  imports:[
    TypeOrmModule.forFeature([OrdersEntity, ItemsEntity, Poductentity]) ]
})
export class UsersAccountModule {}
