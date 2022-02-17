import { Entity, UUID } from '@next-strapi/core';
import { CategoryProductEntity } from './productCategory.entity';

export interface ProductProps {
  name: string;
  image: string;
  content: string;
  meta_description: string;
  meta_title: string;
  price: string;
  slug: string;
  category: CategoryProductEntity;
}

export class ProductEntity extends Entity<ProductProps> {
  protected readonly _id!: UUID;

  static create(createProps: ProductProps): ProductEntity {
    const id: UUID = UUID.generate();
    const props: ProductProps = { ...createProps };
    const product = new ProductEntity({ id, props });
    return product;
  }

}
