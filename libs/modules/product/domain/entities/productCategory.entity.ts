import { Entity, UUID } from '@next-strapi/core';
import { Guard } from 'libs/core/src/domain/guard';

export interface ProductCategoryProps {
  category: string;
}

export class CategoryProductEntity extends Entity<ProductCategoryProps> {
  protected readonly _id!: UUID;

  static create(createProps: ProductCategoryProps): CategoryProductEntity {
    const id: UUID = UUID.generate();
    const props: ProductCategoryProps = { ...createProps };
    const productCategory = new CategoryProductEntity({ id, props });
    return productCategory;
  }
}
