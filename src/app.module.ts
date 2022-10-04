import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ProductsController } from './products/products.controller';
import { ProductsService } from './services/products/products.service';


@Module({
  imports: [],
  controllers: [AppController, ProductsController],
  providers: [ProductsService],
})
export class AppModule {}
