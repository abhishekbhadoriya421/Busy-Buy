import style from '../myCart-style.module.css';
export default function AddOrder({totalPriceOfCartProduct,addProductToMyCart}){
    return(<>
    <div className={style.filter}>
            <h3>TotalPrice:- ₹{totalPriceOfCartProduct}/-</h3>  
            <button className={style.purchaseBtn} onClick={addProductToMyCart}>Purchase</button>      
    </div>
    </>)
}