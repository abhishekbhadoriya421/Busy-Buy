import ProductContainer from './Products/ProductsComponent';
import style from './homeStyle.module.css';
import Filter from './FilterComponent/Filter';
import { FireBaseContext } from '../../ContextAPI/FireBaseUtilityProvider';
import { useContext } from 'react';

export default function HomeComponent(){
    const {setInputSearch,inputSearch} = useContext(FireBaseContext);
    return(<>
        <div className={style.homeContainer}>
            <div className={style.aside}>
                <Filter/>
            </div>
            <div className={style.main}>
                <div className={style.searchSection}>
                    <input type="text"
                    className={style.searchBox}
                    onChange={(e)=>setInputSearch(e.target.value)}
                    value={inputSearch}
                    placeholder='Search By Name'  />
                </div>
                <div>
                    <ProductContainer/>
                </div>
            </div>
        </div>
    </>)
}