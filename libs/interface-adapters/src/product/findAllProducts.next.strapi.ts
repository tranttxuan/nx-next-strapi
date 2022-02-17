import { FindAllProductsNextController } from '@next-strapi/modules';
import { Product } from './product.interface';

export const findAllProductsNextStrapi: Product = () =>{
 return new FindAllProductsNextController(strapi)
}