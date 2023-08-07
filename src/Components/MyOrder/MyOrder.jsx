// import style from './myOrder-style.module.css';
import OrderTable from "./OrderTable/OrderTable";
function MyOrder(){
    return(<>
        <h1 style={{margin:'50px'}}>MyOrder's</h1>
        <div className="orderTable">
            <OrderTable/>
        </div>
    </>)
}

export default MyOrder;
