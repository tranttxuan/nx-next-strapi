import { ProductRepositoryPort } from "../database/product.repository.port";
import { ProductEntity } from "../domain/entities/product.entity";

export class InMemoryProductRepository implements ProductRepositoryPort{
    constructor(private productList: ProductEntity[]) {
    }

    async findAllProduct(): Promise<ProductEntity[]> {
       return await this.productList;
    }

}