import logo from '../../assets/images/logo.svg'
import cart from '../../assets/images/cart.svg'
import user from '../../assets/images/user.svg'

import styles from './Navigation.module.css';

import {Link} from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar.jsx";

export default function Navigation(){
    return (
        <nav className={styles['nav-container']}>
            <div className={styles['nav-brand']}>
                <span className={styles['nav-logo']}>
                    <img src={logo} alt="Company Logo" width={100}/>
                </span>
            </div>
            <ul className={styles['nav-links']}>
                <li>
                   <Link to="/">Shop <span></span></Link>
                </li>
                <li>
                    <Link to="/about">On Sale</Link>

                </li>
                <li>
                    <Link to="/about">New Arrivals</Link>
                </li>
                <li>
                    <Link to="/contact">Brands</Link>
                </li>
            </ul>
            <div className={styles['search-container']}>
                <SearchBar/>
            </div>
            <div className={styles['nav-action']}>
                <div className="cart-wrapper">
                    <span className="cart">
                        <img src={user} alt="user profile" width={20} height={20}/>
                    </span>
                </div>
                <div className="user-wrapper">
                    <span className="user">
                        <img src={cart} alt="user" width={20} height={20}/>
                    </span>
                </div>
            </div>
        </nav>
    )
}
