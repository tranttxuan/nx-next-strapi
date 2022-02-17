import { FindProductsQueryHandler } from './findAllProducts.query-handler';
import { InMemoryProductRepository } from '../stubs/inMemoryProductRepository';
import { CategoryProductEntity } from '../domain/entities/productCategory.entity';
import { ProductEntity } from '../domain/entities/product.entity';

describe('FindProductsQueryHandler.', () => {
  it('should return a empty list', async () => {
    const inMemoryCaseStudies: any = new InMemoryProductRepository([]);
    const response = await new FindProductsQueryHandler(
      inMemoryCaseStudies
    ).handle();
    expect(response.isOk).toBeTruthy();
  });
  it('should return a list with a product', async () => {
    const product1 = ProductEntity.create(
      {
        name: 'string',
        image: 'string',
        content: 'string',
        meta_description: 'string',
        meta_title: 'string',
        price: 'string',
        slug: 'string',
        category: CategoryProductEntity.create({ category: 'category' }),
      },
      'id_1'
    );
    const inMemoryCaseStudies: any = new InMemoryProductRepository([product1]);
    const response = await new FindProductsQueryHandler(
      inMemoryCaseStudies
    ).handle();
    expect(response.isOk).toBeTruthy();
  });
  it('should return a list with 2 product', async () => {
    const product1 = ProductEntity.create(
      {
        name: 'string',
        image: 'string',
        content: 'string',
        meta_description: 'string',
        meta_title: 'string',
        price: 'string',
        slug: 'string',
        category: CategoryProductEntity.create({ category: 'category' }),
      },
      'id_1'
    );
    const product2 = ProductEntity.create(
      {
        name: 'string',
        image: 'string',
        content: 'string',
        meta_description: 'string',
        meta_title: 'string',
        price: 'string',
        slug: 'string',
        category: CategoryProductEntity.create({ category: 'category' }),
      },
      'id_2'
    );
    const inMemoryCaseStudies: any = new InMemoryProductRepository([
      product1,
      product2,
    ]);
    const response = await new FindProductsQueryHandler(
      inMemoryCaseStudies
    ).handle();
    expect(response.isOk).toBeTruthy();
  });
});
