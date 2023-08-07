import style from '../myOrder-style.module.css'
function OrderTable(){
    return(<>
                <table border={1} className={style.table}>
                <thead>
                    <th className={style.Title} >Title</th>
                    <th className={style.Price}>Price</th>
                    <th className={style.Quantity}>Quantity</th>
                    <th className={style.totalPrice}>Total Price</th>
                </thead>
                <tbody className={style.tableBody}>
                    <tr>
                        <td className={style.tableData}>this is my product</td>
                        <td className={style.tableData}>1009</td>
                        <td className={style.tableData}>3</td>
                        <td className={style.tableData}>$24678</td>
                    </tr>

                </tbody>
            </table>
    </>)
}

export default OrderTable