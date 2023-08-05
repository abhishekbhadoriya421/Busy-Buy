import style from '../homeStyle.module.css'

export default function Filter(){
    return(<>
     <div className={style.filter}>
                    <h2 className={style.filterHeading}>Filter</h2>
                    <div className={style.priceRange}>
                        <p>Price: 009911$</p>
                        <input type="range" className={style.input} name="" id="" />
                    </div>
                    <h2 className={style.filterHeading}>Category</h2>
                    <div className={style.category}>
                        <div className={style.displayFlex}>
                            <input type='checkbox' className={style.checkBox}/>
                            <p>men's Clothing</p>
                        </div> 
                        <div className={style.displayFlex}>
                            <input type='checkbox' className={style.checkBox}/>
                            <p>Women's Clothing</p>
                        </div>
                        <div className={style.displayFlex}>
                            <input type='checkbox' className={style.checkBox}/>
                            <p>Jewelry</p>
                        </div>
                        <div className={style.displayFlex}>
                            <input type='checkbox' className={style.checkBox}/>
                            <p>Electronics</p>
                        </div>
                    </div>
                </div>
    </>)
}