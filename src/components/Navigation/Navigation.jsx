import styles from './Navigation.module.css';
import LogoIcon from '../../assets/logo.svg';
import CartIcon from '../../assets/cart.svg';
import UserIcon from '../../assets/user.svg';
import SearchIcon from '../../assets/search.svg';


export default function Navigation() {
  return (
    <nav className={styles.container} aria-label="Main navigation">
      <div className={styles.wrapper}>
        <div className={styles.logoContainer}>
          <img src={LogoIcon} alt="Company Name Logo" />
        </div>

        <nav className={styles.mainMenu}>
          <ul role="menubar">
            <li role="menuitem"><a href="/shop">Shop</a></li>
            <li role="menuitem"><a href="/sale">On Sale</a></li>
            <li role="menuitem"><a href="/new-arrivals">New Arrivals</a></li>
            <li role="menuitem"><a href="/brands">Brands</a></li>
          </ul>
        </nav>
        <div className={styles.searchContainer}>
          <input type="text" />
          <span>
            <img src={SearchIcon} alt="Search Icon" />
          </span>

        </div>
        <div className={styles.userActions}>
          <a href="/cart" aria-label="Shopping Cart">
            <img src={CartIcon} alt="Shopping Cart Icon" />
          </a>
          <a href="/account" aria-label="User Account">
            <img src={UserIcon} alt="User Account Icon" />
          </a>
        </div>
      </div>
    </nav>
  )
}