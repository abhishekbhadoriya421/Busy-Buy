import style from '../myCart-style.module.css';
export default function AddOrder(){
    return(<>
    <div className={style.filter}>
            <h3>TotalPrice:- ₹699/-</h3>  
            <button className={style.purchaseBtn}>Purchase</button>      
    </div>
    </>)
}