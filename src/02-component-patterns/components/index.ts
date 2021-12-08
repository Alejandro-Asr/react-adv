import { ProductCard as ProductHOC } from './ProductCard';

import { ProductTitle } from './ProductTitle';
import { ProductImage } from './ProductImage';
import { ProductButtons } from './ProductButtons';
import { ProductCardHOCProps } from '../interfaces/interfaces';

export { ProductButtons } from './ProductButtons';
export { ProductImage } from './ProductImage';
export { ProductTitle } from './ProductTitle';

export const ProductCard: ProductCardHOCProps  = Object.assign( ProductHOC, {
    Title   : ProductTitle,
    Image   : ProductImage,
    Buttons : ProductButtons
})



export default ProductCard;