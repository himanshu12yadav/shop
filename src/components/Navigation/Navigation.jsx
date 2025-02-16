import styles from './Navigation.module.scss';
import LogoIcon from '../../assets/logo.svg';
import CartIcon from '../../assets/cart.svg';
import UserIcon from '../../assets/user.svg';
import SearchIcon from '../../assets/search.svg';
import hamburgerIcon from '../../assets/hamburger.svg';
import searchIcon from '../../assets/searchIcon.svg';
import { useState } from 'react';


export default function Navigation() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className={styles.navigation} aria-label="Main navigation">
      <div className={styles.navigation__wrapper}>
        <span className={styles['navigation__wrapper--hamburger']} role="button" tabIndex="0" aria-label="Toggle navigation menu" aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <img src={hamburgerIcon} alt="Cart Icon" />
        </span>
        <span>
          <img src={LogoIcon} alt="Company Name Logo" />
        </span>



        {/* Mobile menu */}
        <ul
          className={`${styles['mobile-menu']} ${isMenuOpen ? styles['nav-menu--active'] : ""}`}
          role="menubar"
          aria-hidden={!isMenuOpen}
        >
          <li className={styles["mobile-menu__item"]} role="menuitem">
            <a className={styles['mobile-menu__link']} href="/shop" title="Shop our products">Shop</a>
          </li>
          <li className={styles["mobile-menu__item"]} role="menuitem">
            <a className={styles['mobile-menu__link']} href="/sale" title="View items on sale">On Sale</a>
          </li>
          <li className={styles["mobile-menu__item"]} role="menuitem">
            <a className={styles['mobile-menu__link']} href="/new-arrivals" title="Check new arrivals">New Arrivals</a>
          </li>
          <li className={styles["mobile-menu__item"]} role="menuitem">
            <a className={styles['mobile-menu__link']} href="/brands" title="Browse by brands">Brands</a>
          </li>
        </ul>



        {/*  Desktop menu */}
        <ul className={styles['nav-menu']} role="menubar">
          <li className={styles["nav-menu__item"]} role="menuitem">
            <a className={styles['nav-menu__link']} href="/shop">Shop</a>
          </li>
          <li className={styles["nav-menu__item"]} role="menuitem">
            <a className={styles['nav-menu__link']} href="/sale">On Sale</a>
          </li>
          <li className={styles["nav-menu__item"]} role="menuitem">
            <a className={styles['nav-menu__link']} href="/new-arrivals">New Arrivals</a>
          </li>
          <li className={styles["nav-menu__item"]} role="menuitem">
            <a className={styles['nav-menu__link']} href="/brands">Brands</a>
          </li>
        </ul>


        <div className={styles.search}>
          <input type="text" className={styles["search__input"]} placeholder="Search..." />
          <span className={styles["search__icon"]}>
            <img src={SearchIcon} alt="Search Icon" />
          </span>
        </div>

        <div className={styles["action-icons"]}>

          <span className={styles["action-icons__item"]}>
            <img src={searchIcon} alt="Cart" />
          </span>

          <span className={styles["action-icons__item"]}>
            <img src={CartIcon} alt="Cart" />
          </span>
          <span className={styles["action-icons__item"]}>
            <img src={UserIcon} alt="User" />
          </span>
        </div>

        {/* <nav>

        </nav>

        <div>
          <input type="text" />
          <span>
            <img src={SearchIcon} alt="Search Icon" />
          </span>

        </div>

        <div>
          <a href="/cart" aria-label="Shopping Cart">
            <img src={CartIcon} alt="Shopping Cart Icon" />
          </a>
          <a href="/account" aria-label="User Account">
            <img src={UserIcon} alt="User Account Icon" />
          </a>
        </div> */}

      </div>
    </nav>
  )
}