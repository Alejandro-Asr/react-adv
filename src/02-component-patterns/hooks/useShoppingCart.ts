import { useState } from "react";
import { Product, productInCard } from "../interfaces/interfaces";

export const useShoppingCart = () => {

    const [ shoppingCart, setshoppingCart ] = useState<{ [ key: string ]: productInCard }>({});

    const onProductChange = ({ count, product }: { count: number, product: Product} ) => {

        setshoppingCart( oldShoppingCart => {

            if ( count === 0 ){
                const { [product.id]: toDelete, ...rest } = oldShoppingCart;
                return rest;
            }

            return {
                ...oldShoppingCart,
                [ product.id ]: { ...product, count }
            }
        });
    }
    return {
        shoppingCart,
        onProductChange
    }
}