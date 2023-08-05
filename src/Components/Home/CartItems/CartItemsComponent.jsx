import style from './cart-Item-style.module.css';
import Item from './Item/Item';
function CartItemComponent(){
    return (<>
        <div className={style.ItemsContainer}>
            <Item/>
        </div>
    </>)
}
export default CartItemComponent;