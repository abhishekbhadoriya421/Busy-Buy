import { Link } from 'react-router-dom';
import imageData from './imageData/imageData';
import style from './navStyle.module.css';
import { useContext } from 'react';
import {FireBaseContext} from '../../../ContextAPI/SessionHandlerContext';
export default function Navbar(){
    // navigation component 
    const {user, handleDestroySession} = useContext(FireBaseContext)

    return(<>
        <ul className={style.nav}>
            <div className="home">
                <Link className={style.anchorTag} to={'/'}>
                    <img src={imageData.home.url} className={style.navImage} alt="HomeLoading" />
                    <span className={style.navText}>{imageData.home.title}</span>
                </Link>
            </div>
            {user && <>
                <div className="myOrder">
                    <Link className={style.anchorTag} to={'myOrder'}>
                        <img src={imageData.myOrder.url} className={style.navImage} alt="myOrderLoading" />
                        <span className={style.navText}>{imageData.myOrder.title}</span>
                    </Link>
                </div>
                <div className="cart" to={'cart'}>
                    <Link to={'myCart'} className={style.anchorTag}>
                        <img src={imageData.cart.url} className={style.navImage} alt="cartLoading" />
                        <span className={style.navText}>{imageData.cart.title}</span>
                    </Link>
                </div>
            </>
            }
            <div className="session" >
                {(user)?
                    <Link className={style.anchorTag} onClick={handleDestroySession}>
                        <img src={imageData.logout.url} className={style.navImage} alt={imageData.logout.title} />
                        <span className={style.navText}>{imageData.logout.title}</span>
                    </Link>
                :
                    <Link to={'session'} className={style.anchorTag}>
                        <img src={imageData.signIn.url} className={style.navImage} alt="SessionLoading" />
                        <span className={style.navText}>{imageData.signIn.title}</span>
                    </Link>
                }
               
            </div>
        </ul>
    </>)
}

