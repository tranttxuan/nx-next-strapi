import { ProductEntity } from "../domain/entities/product.entity";

export interface ProductRepositoryPort {
  findAllProduct(): Promise<ProductEntity[]>;
}
