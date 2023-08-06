import CartItems from './CartItems.jsx/CartItems';
import style from './myCart-style.module.css';
import BuyProduct from './BuyProduct/AddOrder';
function MyCart(){
    return(<>
            <div className={style.CartContainer}>
            <div className={style.aside}>
                <BuyProduct/>
            </div>
            <div className={style.main}>
                <CartItems/> 
            </div>
        </div> 
    </>)
}

export default MyCart;