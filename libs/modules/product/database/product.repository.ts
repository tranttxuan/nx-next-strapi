import { ProductEntity } from "../domain/entities/product.entity";
import { ProductRepositoryPort } from "./product.repository.port";

export class ProductRepository implements ProductRepositoryPort{
    constructor(private productList: ProductEntity[]) {
    }

    async findAllProduct(): Promise<ProductEntity[]> {
      return await this.productList
    }

}