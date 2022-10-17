import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Poductentity } from 'src/models/poductentity';

/**
 * ProductentityService 
 * @method getProducts return list of products 
 * @method product return specific product by iD
 * @method createProduct return new product will be create in db
 * @method deleteProduct for deleting specific product accoridng its iD
 */

@Injectable()
export class ProductentityService {
    constructor(@InjectRepository(Poductentity) private productRepository: Repository<Poductentity>) {

    }


    getProducts(): Promise<Poductentity[]> {
        return this.productRepository.find();
    }

    product(id: number): Promise<Poductentity> {
        return this.productRepository.findOneBy({
            id: id // where id is your column name
        })
    }

    createProduct(product: Poductentity): Promise<Poductentity> {
        return this.productRepository.save(product);
    }


    async deleteProduct(id: number): Promise<void> {
        await this.productRepository.delete(id)
    }


    update(produt: Poductentity): Promise<Poductentity> {
        if (produt.id != 0 || produt.id != undefined) {
            return this.productRepository.save(produt);
        }

    }

}
