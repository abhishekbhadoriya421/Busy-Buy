import { useContext } from 'react';
import style from './item-Style.module.css';
import { ProductHandler } from '../../../../ContextAPI/UserProductHandlerContext';

export default function Item({item}){
    const {handleProductInCart} = useContext(ProductHandler);
    return(<>
        <div className={style.itemContainer}>
            <div className={style.ItemImage}>
                <img src={item.url}
                className={style.Image}
                alt={item.name} />
            </div>
            <div className={style.detailContainer}>
                <p className={style.ItemName}>{item.name}</p>
                <p className={style.ItemPrice}>
                    &#8377;
                    <span>{item.price}</span>
                </p>
                <button className={style.addToCartBtn} onClick={()=>handleProductInCart(item)}>Add To Cart</button>
            </div>
        </div>
    </>)
}