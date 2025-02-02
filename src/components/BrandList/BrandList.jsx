import styles from './BrandList.module.scss'
import Brand from "../Brand/Brand.jsx";

export default function BrandList({brands=[]}){
    return (
        <div className={styles.brand__container}>
            {
                brands.map((brand)=> (
                    <Brand key={brand.name}  brand={brand}/>
                ))
            }
        </div>
    )
}
