import CartItems from './CartItems.jsx/CartItems';
import style from './myCart-style.module.css';
import BuyProduct from './BuyProduct/AddOrder';
import { useContext } from 'react';
import { ProductHandler } from '../../ContextAPI/UserProductHandlerContext';
function MyCart(){
    const {cartProducts,handleRemoveFromCart,totalPriceOfCartProduct,addProductToMyCart} = useContext(ProductHandler);

    return(<>
            <div className={style.CartContainer}>
            <div className={style.aside}>
                <BuyProduct 
                totalPriceOfCartProduct={totalPriceOfCartProduct}
                addProductToMyCart={addProductToMyCart}
                />
            </div>
            <div className={style.main}>
                {
                    (cartProducts.length===0)
                    ?
                    <h1>Product Not Found</h1>
                    :
                    cartProducts.map((ele,index)=>{
                        return <CartItems
                                key={index}
                                id={ele.id}
                                name={ele.name}
                                imageURL={ele.url}
                                price={ele.price}
                                handleRemoveFromCart={handleRemoveFromCart} 
                            />         
                    })
                }
            </div>
        </div> 
    </>)
}

export default MyCart;