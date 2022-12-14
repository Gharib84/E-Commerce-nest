import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ProductsController } from './products/products.controller';
import { ProductsService } from './services/products/products.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Poductentity } from './models/poductentity';
import { ProductentityService } from './services/products/productentity/productentity.service';
import { AdminController } from './admin/admin.controller';
import { AdminModule } from './admin/admin.module';
import { UsersTable } from './models/users-table';
import { UserService } from './services/user/user.service';
import { AuthModule } from './auth/auth.module';
import { CartModule } from './cart/cart.module';
import { OrderedBulkOperation } from 'typeorm';
import { OrdersEntity } from './models/orders.entity';
import { ItemsEntity } from './models/items.entity';
import { OrderService } from './services/order/order.service';
import { UsersAccountModule } from './users-account/users-account.module';



@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'online_store',
      entities: [Poductentity,UsersTable,OrdersEntity,ItemsEntity],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Poductentity, UsersTable, OrdersEntity, ItemsEntity]),
    AdminModule,
    AuthModule,
    CartModule,
    UsersAccountModule,
  ],
  controllers: [AppController, ProductsController, AdminController],
  providers: [ProductsService, ProductentityService, UserService, OrderService],
  exports: [ProductentityService, OrderService, UserService,ProductsService]
})
export class AppModule { }
