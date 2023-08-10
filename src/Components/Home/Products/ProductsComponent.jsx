import style from './cart-Item-style.module.css';
import Item from './Item/Item';
import { useContext } from 'react';
import { FireBaseContext } from '../../../ContextAPI/SessionHandlerContext';
function CartItemComponent(){
    const {Products,searchedProducts} = useContext(FireBaseContext);

    return (<>
        <div className={style.ItemsContainer}>
            {/* if searchedProducts set to false it mean search result not found then show empty screen */}
            {(!searchedProducts)? false: 
            // if search product is an empty array then search box is empty so show all the products
            (searchedProducts.length===0)?
            Products.map((ele,index)=>{
                return <Item key={index} item={ele}/>
            })
            :
            // if search product is not empty it mean user has search something which is available
            searchedProducts.map((ele,index)=>{
                return <Item key={index} item={ele}/>
            })
            }
            
            
        </div>
    </>)
}
export default CartItemComponent;