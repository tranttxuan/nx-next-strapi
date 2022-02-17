import { Result } from "@next-strapi/core";
import { ProductRepository } from "../database/product.repository";
import { ProductEntity } from "../domain/entities/product.entity";
import { ProductResponse } from "../dtos/product.response.dto";
import { FindProductsQueryHandler } from "./findAllProducts.query-handler";

export class FindAllProductsNextController{
    constructor(private readonly productRepo: ProductRepository){
    }
    async execute(): Promise<ProductResponse[]>{
        const result= await new FindProductsQueryHandler(this.productRepo).handle();
        return result.unwrap().map(prod => new ProductResponse(prod))
    }
}