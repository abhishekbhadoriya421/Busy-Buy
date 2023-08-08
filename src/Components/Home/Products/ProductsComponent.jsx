import style from './cart-Item-style.module.css';
import Item from './Item/Item';
import { useContext } from 'react';
import { FireBaseContext } from '../../../ContextAPI/FireBaseUtilityProvider';
function CartItemComponent(){
    const {Products} = useContext(FireBaseContext);
    return (<>
        <div className={style.ItemsContainer}>
            {Products.map((ele,index)=>{
                return <Item key={index} item={ele}/>
            })}
            
        </div>
    </>)
}
export default CartItemComponent;