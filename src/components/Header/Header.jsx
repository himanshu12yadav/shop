import styles from './Header.module.scss'
import banner from '../../assets/images/banner.jpg'
import Button from "../Button/Button.jsx";
import BrandList from "../BrandList/BrandList.jsx";



export default function Header(){
    const brandLinks = [
        { name: "ZARA", logo: 'ZARA'},
        { name: "H&M", logo:  'H&M'},
        { name: "NIKE", logo: 'NIKE' },
        { name: "PUMA", logo: 'PUMA' },
        { name: "GUCCI", logo:'GUCCI' },
        { name: "VERSACE", logo: 'VERSACE' },
    ];

    return (
        <div className={styles.hero}>
            <div className={styles.hero__container}>
                <div className={styles.hero__content}>
                    <div className={styles['hero__primary-heading']}>
                        <p>FIND CLOTHES</p>
                        <p>THAT MATCHES</p>
                        <p>YOUR STYLE</p>
                    </div>
                    <p className={styles['hero__secondary-heading']}>
                        Browse through our diverse range of meticulously crafted garments, designed <br/>  to bring out your individuality and cater to your sense of style.
                    </p>
                    <div className={styles.hero__btn}>
                        <Button text={'Shop Now'}/>
                    </div>

                    <div className={styles.hero__promotion}>
                        <div>
                            <p><span>200+</span></p>
                            <p>International Brands</p>

                        </div>
                        <div>
                            <p><span>2,000+</span></p>
                            <p>High-Quality Products</p>

                        </div>
                        <div>
                            <p><span>30,000+</span></p>
                            <p>Happy Customers</p>

                        </div>

                    </div>

                </div>
                <div className={styles.hero__image}>
                    <span>
                        <img src={banner} alt="hero" />
                    </span>
                </div>
            </div>
            <BrandList brands={brandLinks}/>
        </div>
    )
}
