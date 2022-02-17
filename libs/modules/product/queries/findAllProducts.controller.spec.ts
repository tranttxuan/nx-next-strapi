import { ProductEntity } from '../domain/entities/product.entity';
import { CategoryProductEntity } from '../domain/entities/productCategory.entity';
import { InMemoryProductRepository } from '../stubs/inMemoryProductRepository';
import { FindAllProductsNextController } from './findAllProducts.controller';
describe('FindAllProductsNextController', () => {
  it('should return DTO with empty list which is passed to NEXT application', async () => {
    const inMemoryCaseStudies: any = new InMemoryProductRepository([]);
    const res = await new FindAllProductsNextController(
      inMemoryCaseStudies
    ).execute();
    expect(res).toEqual([]);
  });
  it('should return DTO with 1 prod which is passed to NEXT application', async () => {
    const product1 = ProductEntity.create({
      name: 'string',
      image: 'string',
      content: 'string',
      meta_description: 'string',
      meta_title: 'string',
      price: 'string',
      slug: 'string',
      category: CategoryProductEntity.create({ category: 'category' }),
    });
    const inMemoryCaseStudies: any = new InMemoryProductRepository([product1]);
    const res = await new FindAllProductsNextController(
      inMemoryCaseStudies
    ).execute();
    expect(res).toEqual([
      {
        name: 'string',
        image: 'string',
        content: 'string',
        meta_description: 'string',
        meta_title: 'string',
        price: 'string',
        slug: 'string',
        category: 'category',
      },
    ]);
  });
  it('should return DTO with 2 prod which is passed to NEXT application', async () => {
    const product1 = ProductEntity.create({
      name: 'string',
      image: 'string',
      content: 'string',
      meta_description: 'string',
      meta_title: 'string',
      price: 'string',
      slug: 'string',
      category: CategoryProductEntity.create({ category: 'category' }),
    });
    const product2 = ProductEntity.create({
      name: 'string_',
      image: 'string_',
      content: 'string_',
      meta_description: 'string_',
      meta_title: 'string_',
      price: 'string_',
      slug: 'string_',
      category: CategoryProductEntity.create({ category: 'category_' }),
    });
    const inMemoryCaseStudies: any = new InMemoryProductRepository([
      product1,
      product2,
    ]);
    const res = await new FindAllProductsNextController(
      inMemoryCaseStudies
    ).execute();
    expect(res).toEqual([
      {
        name: 'string',
        image: 'string',
        content: 'string',
        meta_description: 'string',
        meta_title: 'string',
        price: 'string',
        slug: 'string',
        category: 'category',
      },
      {
        name: 'string_',
        image: 'string_',
        content: 'string_',
        meta_description: 'string_',
        meta_title: 'string_',
        price: 'string_',
        slug: 'string_',
        category: 'category_',
      },
    ]);
  });
});
