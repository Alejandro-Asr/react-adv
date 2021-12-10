import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components';
import { useShoppingCart } from '../hooks/useShoppingCart';
import '../styles/custom-styles.css';
import { products } from '../data/products';

export const ShoppingPage = () => {

    const { shoppingCart, onProductChange } = useShoppingCart();

    return (
        <div>
            <h1>Shopping Store</h1>
            <hr />
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}>
                {
                    products.map( product => (
                        <ProductCard 
                            product={ product } 
                            className="bg-dark text-white"
                            key={ product.id }
                            value={ shoppingCart[product.id]?.count || 0 }
                            onChange={ onProductChange }
                        >
                            <ProductImage className="custom-image"/>
                            <ProductTitle className="text-bold" title={ '' } />
                            <ProductButtons className="custom-buttons"/>
                        </ProductCard>
                    ))
                }
            </div>

            <div className='shopping-cart'>
                {
                    Object.entries( shoppingCart ).map( ([ key, product ]) => (
                        <ProductCard 
                            product={ product } 
                            className="bg-dark text-white"
                            style={{ width: '100px' }}
                            key={ key }
                            value={ product.count }
                            onChange={ onProductChange }
                        >
                            <ProductImage className="custom-image"/>
                            <ProductButtons 
                                className="custom-buttons"
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center'
                                }}
                            />
                        </ProductCard>  
                    ))                    
                }
            </div>
        </div>
    )
}
