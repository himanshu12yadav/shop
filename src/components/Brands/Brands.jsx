import styles from './Brands.module.scss'
import BrandList from "./BrandList/BrandList";

export default function Brands(){

    const brands = [
            {
            id: 1,
            name: 'Nike',
            image: 'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            id: 2,
            name: 'Adidas',
            image: 'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            id: 3,
            name: 'Puma',
            image: 'https://images.pexels.com/photos/15'
        },
        {
            id: 4,
            name: 'Reebok',
            image: 'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            id: 5,
            name: 'New Balance',
            image: 'https://images.pexels.com/photos/159850'
        },
        {
            id: 6,
            name: 'Converse',
            image: 'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            id: 7,
            name: 'Vans',
            image: 'https://images.pexels.com/photos/1598505/pexels'
        },
        {
            id: 8,
            name: 'Fila',
            image: 'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            id: 9,
            name: 'Skechers',
            image: 'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        }
        ]

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
