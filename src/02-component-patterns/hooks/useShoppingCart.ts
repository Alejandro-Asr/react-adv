import { useState } from "react";
import { Product, productInCard } from "../interfaces/interfaces";
import { products } from '../data/products';

export const useShoppingCart = () => {

    const [ shoppingCart, setshoppingCart ] = useState<{ [ key: string ]: productInCard }>({});

    const onProductChange = ({ count, product }: { count: number, product: Product} ) => {

        setshoppingCart( oldShoppingCart => {

            const productInCart: productInCard = oldShoppingCart[ product.id ] || { ...product, count: 0 } ;
            if( Math.max( productInCart.count + count ) > 0 ){
                productInCart.count += count;
                return {
                    ...oldShoppingCart,
                    [product.id]: productInCart
                }
            }

            // Borrar el producto 
            const { [product.id]: toDelete, ...rest } = oldShoppingCart;
            return rest;

            // if ( count === 0 ){
            //     const { [product.id]: toDelete, ...rest } = oldShoppingCart;
            //     return rest;
            // }

            // return {
            //     ...oldShoppingCart,
            //     [ product.id ]: { ...product, count }
            // }
        });
    }
    return {
        products,
        shoppingCart,
        onProductChange
    }
}