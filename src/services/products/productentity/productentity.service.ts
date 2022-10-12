import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Poductentity } from 'src/models/poductentity';

/**
 * ProductentityService 
 * @method getProducts return list of products 
 * @method product return specific product by iD
 */

@Injectable()
export class ProductentityService {
    constructor(@InjectRepository(Poductentity) private productRepository: Repository<Poductentity>) {

    }


    getProducts():Promise<Poductentity[]>{
        return this.productRepository.find();
    }

    product(id: number):Promise<Poductentity>{
        return this.productRepository.findOne({
            where:{
                id: id
            }
        });
    }



}
