import HeaderImg from '../../assets/headerImg.svg';
import styles from './Header.module.scss';

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles["header__wrapper"]}>
        <div className={styles["header__wrapper--content"]}>
          <p className={styles["header__wrapper--content--title"]}>
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </p>

          <p className={styles["header__wrapper--content--description"]}>
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of style.
          </p>
          <button className={styles["header__wrapper--content--cta"]}>Shop Now</button>
          <div className={styles["header__wrapper--content--stats"]}>
            <div className={styles["header__wrapper--content--stats__stat"]}>
              <span className={styles["header__wrapper--content--stats__stat--number"]}>200+</span>
              <span className={styles["header__wrapper--content--stats__stat--label"]}>International Brands</span>
            </div>
            <div className={styles["header__wrapper--content--stats__stat"]}>
              <span className={styles["header__wrapper--content--stats__stat--number"]}>2,000+</span>
              <span className={styles["header__wrapper--content--stats__stat--label"]}>High-Quality Products</span>
            </div>
            <div className={styles["header__wrapper--content--stats__stat"]}>
              <span className={styles["header__wrapper--content--stats__stat--number"]}>30,000+</span>
              <span className={styles["header__wrapper--content--stats__stat--label"]}>Happy Customers</span>
            </div>
          </div>

        </div>
        <img className={styles["header__wrapper--img"]} src={HeaderImg} alt="header" />
      </div>
    </div>
  )
}