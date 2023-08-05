import CartItemComponent from './CartItems/CartItemsComponent';
import style from './homeStyle.module.css';
import Filter from './FilterComponent/Filter';

export default function HomeComponent(){
    return(<>
        <div className={style.homeContainer}>
            <div className={style.aside}>
                <Filter/>
            </div>
            <div className={style.main}>
                <div className={style.searchSection}>
                    <input type="text"
                    className={style.searchBox}
                    placeholder='Search By Name'  />
                </div>
                <div>
                    <CartItemComponent/>
                </div>
            </div>
        </div>
    </>)
}