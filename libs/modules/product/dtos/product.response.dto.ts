import { ResponseBase } from '@next-strapi/core';
import { Product } from '@next-strapi/interface-adapters';
import { ProductEntity } from '../domain/entities/product.entity';

export class ProductResponse extends ResponseBase implements Product {
  name: string;
  image: string;
  content: string;
  meta_description: string;
  meta_title: string;
  price: string;
  slug: string;
  category: string;

  constructor(product: ProductEntity) {
    super();

    const props = product.getPropsCopy();
console.log(props)
    this.name = props.name;
    this.content = props.content;
    this.image = props.image;
    this.meta_description = props.meta_description;
    this.meta_title = props.meta_title;
    this.price = props.price;
    this.slug = props.slug;
    this.category = props.category.getPropsCopy().category;
  }
}