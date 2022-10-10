import { Injectable } from '@nestjs/common';
import { Product } from 'src/models/product';
@Injectable()
export class ProductsService {
    /**
     * this service that help us to create static product api 
     * before dealiing with database 
     * @array products that return array of object
     * @method productById return specific product by its id
     */
    products: Product[] = [
        new Product(1, "img/product_1.png", "Hoodies & Sweetshir", "Explore Now!.", 100, "arrow.svg"),
        new Product(2, "img/2.png", "Hoodies & Sweetshir", "Explore Now!.", 200, "arrow.svg"),
        new Product(3, "img/product_3.png", "Hoodies & Sweetshir", "Explore Now!.", 30, "arrow.svg"),
        new Product(4, "img/4.png", "Hoodies & Sweetshir", "Explore Now!.", 40, "arrow.svg"),
        new Product(5, "img/100.png", "Hoodies & Sweetshir", "Explore Now!.", 234, "arrow.svg"),
        new Product(6, "img/6.png", "Hoodies & Sweetshir", "Explore Now!.", 500, "arrow.svg"),
        new Product(7, "img/7.png", "Hoodies & Sweetshir", "Explore Now!.", 600, "arrow.svg"),
        new Product(8, "img/11.png", "Hoodies & Sweetshir", "Explore Now!.", 55, "arrow.svg"),
        new Product(9, "img/12.png", "Hoodies & Sweetshir", "Explore Now!.", 132, "arrow.svg"),
        new Product(10, "img/13.png", "Hoodies & Sweetshir", "Explore Now!.", 103, "arrow.svg"),
        new Product(11, "img/14.png", "Hoodies & Sweetshir", "Explore Now!.", 130, "arrow.svg"),
        new Product(12, "img/15.png", "Hoodies & Sweetshir", "Explore Now!.", 150, "arrow.svg"),
        new Product(13, "img/16.png", "Hoodies & Sweetshir", "Explore Now!.", 170, "arrow.svg"),
        new Product(14, "img/17.png", "Hoodies & Sweetshir", "Explore Now!.", 180, "arrow.svg"),
        new Product(15, "img/18.png", "Hoodies & Sweetshir", "Explore Now!.", 432, "arrow.svg"),

    ]
    constructor() {


    }

    productsList(): Product[] {
        return this.products;
    }


    getProductById(id: number): Product {
       return this.products.find((p)=> p.id == id)
    }
}
