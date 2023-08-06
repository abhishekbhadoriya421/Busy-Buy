import { useState } from 'react';
import style from './CartItem-style.module.css';
export default function CartItem(){

    const [quantity,setQuantity] = useState(1);
    // Handle Increase 
    function handleIncreaseQuantity(){
        // quantity should not exceed more than 10
        if(quantity>9){
            return;
        }
        setQuantity(quantity+1);
    }

    // Handle Decrease
    function handleDecreaseQuantity(){
        // quantity must be one
        if(quantity<2){
            return
        }
        setQuantity(quantity-1);
    }

    return(<>
        <div className={style.itemContainer}>
            <div className={style.ItemImage}>
                <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
                className={style.Image}
                alt="" />
            </div>
            <p className={style.ItemName}>Fjallraven - Foldsack No. 1 Backpac...</p>
            <div className={style.priceAndQuantity}>
                <p className={style.ItemPrice}>
                    &#8377;
                    <span>1099</span>
                </p>

                <p className={style.quantity}>
                   <p className={style.manipulateQuantity}
                      onClick={handleIncreaseQuantity}
                   >+</p>
                   <p>{quantity}</p>
                   <p className={style.manipulateQuantity}
                     onClick={handleDecreaseQuantity}
                   >-</p>
                </p>
            </div>
            
            <button className={style.addToCartBtn}>RemoveFromCart</button>
        </div>
    </>)
}