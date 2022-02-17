import { Entity, UniqueEntityID, UUID } from '@next-strapi/core';
import { ID } from 'libs/core/src/domain/value-objects/id.value-object';
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
  protected readonly _id!: ID;

  static create(createProps: ProductProps, createdId?: string): ProductEntity {
    const id: UniqueEntityID = new UniqueEntityID(createdId);
    const props: ProductProps = { ...createProps };
    const product = new ProductEntity({ id, props });
    return product;
  }
}
