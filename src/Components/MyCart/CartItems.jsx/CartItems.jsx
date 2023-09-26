import { useState } from 'react';
import style from './CartItem-style.module.css';
export default function CartItem({id,name,imageURL,price,handleRemoveFromCart}){

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
                <img src={imageURL}
                className={style.Image}
                alt={name} />
            </div>
            <div className={style.detailContainer}>
                <p className={style.ItemName}>{name}</p>
                <div className={style.priceAndQuantity}>
                    <p className={style.ItemPrice}>
                        &#8377;
                        <span>{price}</span>
                    </p>

                    <div className={style.quantity}>
                    <p className={style.manipulateQuantity}
                        onClick={handleIncreaseQuantity}
                    >+</p>
                    <p>{quantity}</p>
                    <p className={style.manipulateQuantity}
                        onClick={handleDecreaseQuantity}
                    >-</p>
                    </div>
                </div>
            </div>
            
            <button className={style.addToCartBtn} onClick={()=>handleRemoveFromCart(id)} >RemoveFromCart</button>
        </div>
    </>)
}