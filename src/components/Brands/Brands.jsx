import styles from './Brands.module.scss'
import BrandList from "./BrandList/BrandList";

export default function Brands(){

    const brands = [
        {
            id: 1,
            name: 'Nike',
            image: 'https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg'
        },
        {
            id: 2,
            name: 'Adidas',
            image: 'https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg'
        },
        {
            id: 3,
            name: 'Puma',
            image: 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Puma-Logo.svg'
        },
        {
            id: 4,
            name: 'Reebok',
            image: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Reebok_2019_logo.svg'
        },
        {
            id: 5,
            name: 'New Balance',
            image: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/New_Balance_logo.svg'
        },
        {
            id: 6,
            name: 'Converse',
            image: 'https://upload.wikimedia.org/wikipedia/commons/3/3f/Converse_logo.svg'
        },
        {
            id: 7,
            name: 'Vans',
            image: 'https://upload.wikimedia.org/wikipedia/commons/e/e5/Vans-logo.svg'
        },
        {
            id: 8,
            name: 'Fila',
            image: 'https://upload.wikimedia.org/wikipedia/commons/0/03/Fila_logo.svg'
        },
        {
            id: 9,
            name: 'Skechers',
            image: 'https://upload.wikimedia.org/wikipedia/commons/3/3b/Skechers_logo.svg'
        }
    ];
    

    return (
        <div className={styles.brands}>
            {
                brands.map((brand)=> (
                    <BrandList key={brand.id} brand={brand}/>
                ))
            }
        </div>
    )
}
