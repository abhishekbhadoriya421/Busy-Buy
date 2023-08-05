import { Outlet } from 'react-router-dom';
import style from './headerStyle.module.css';
import Navbar from './NavBar/Navbar'
function HeaderComponent(){
    return(<>
        <header className={style.header}>
            <p className={style.heading}>BuyBusy</p>
            <nav className={style.navigationBar}>
                <Navbar/>
            </nav>
        </header>
        <Outlet/>
    </>)
}

export default HeaderComponent;