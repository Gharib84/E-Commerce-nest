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



@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'online_store',
      entities: [Poductentity,UsersTable],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Poductentity, UsersTable]),
    AdminModule,
    AuthModule,
    CartModule
  ],
  controllers: [AppController, ProductsController, AdminController],
  providers: [ProductsService, ProductentityService, UserService],
  exports: [ProductentityService]
})
export class AppModule { }
