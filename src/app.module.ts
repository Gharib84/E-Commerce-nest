import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ProductsController } from './products/products.controller';
import { ProductsService } from './services/products/products.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Poductentity } from './models/poductentity';
import { ProductentityService } from './services/products/productentity/productentity.service';



@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'online_store',
      entities: [Poductentity],
      synchronize: true,
    })
  ],
  controllers: [AppController, ProductsController],
  providers: [ProductsService, ProductentityService],
})
export class AppModule { }
