import { QueryHandlerBase, Result } from '@next-strapi/core';
import { ProductRepository } from '../database/product.repository';
import { ProductEntity } from '../domain/entities/product.entity';

export class FindProductsQueryHandler extends QueryHandlerBase {
  constructor(private prodRepo: ProductRepository) {
    super();
  }

  async handle(): Promise<Result<ProductEntity[], Error>> {
    try {
      const products = await this.prodRepo.findAllProduct();
      return Result.ok(products);
    } catch (e) {
      return Result.err(new Error('Error on FindProductsQueryHandler'));
    }
  }
}
