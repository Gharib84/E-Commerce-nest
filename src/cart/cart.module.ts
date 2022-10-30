import { Module } from '@nestjs/common';
import { CartController } from './cart.controller';
import { ProductentityService } from 'src/services/products/productentity/productentity.service';
import { Poductentity } from 'src/models/poductentity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [CartController],
  providers:[ProductentityService],
  imports: [
    TypeOrmModule.forFeature([Poductentity])
]
})
export class CartModule {}
