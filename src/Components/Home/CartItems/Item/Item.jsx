import style from './item-Style.module.css';
export default function Item(){
    return(<>
        <div className={style.itemContainer}>
            <div className={style.ItemImage}>
                <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
                className={style.Image}
                alt="" />
            </div>
            <p className={style.ItemName}>Fjallraven - Foldsack No. 1 Backpac...</p>
            <p className={style.ItemPrice}>
                &#8377;
                <span>1099</span>
            </p>
            <button className={style.addToCartBtn}>Add To Cart</button>
        </div>
    </>)
}