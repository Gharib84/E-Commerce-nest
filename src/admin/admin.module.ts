import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { ProductentityService } from 'src/services/products/productentity/productentity.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Poductentity } from 'src/models/poductentity';

@Module({
    controllers:[AdminController],
    providers:[ProductentityService],
    imports: [
        TypeOrmModule.forFeature([Poductentity])
    ]
})
export class AdminModule {}
