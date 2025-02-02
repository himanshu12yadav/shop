import styles from './Brand.module.scss'

export default function Brand({brand}){
    return (
        <div className={styles.brand}>
            <div className={styles.container}>
                <span>
                   {
                       brand.logo
                   }
                </span>
            </div>
        </div>
    )
}





