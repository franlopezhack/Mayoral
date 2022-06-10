import { useState,useEffect } from 'react';
import Filter from '../../components/Filter/filter';
import SearchBar from '../../components/searchbar/SearchBar';
import styles from '../../styles/Products.module.css'

function Products({ data }) {


    const productPrice = data.map(product => product.price)
   

    const [sortPrice, setSortPrice] = useState(productPrice)

    useEffect(() => {
        setSortPrice()
    }, [sortPrice])

    function handleHigh(e) {
        setSortPrice(
            productPrice.sort((a, b) => a - b)
        )
    }

    console.log(sortPrice)

    function handleLow(e) {
        setSortPrice(
            productPrice.sort((a, b) => b - a)
        )
    }

    return (
        <div className={styles.container}>
            <h1>Productos</h1>
          <SearchBar/>
            <Filter
                handleHigh={handleHigh}
                handleLow={handleLow}
            />    
            <div className={styles.card}>
                {
                    data.map((products) =>
                        <div className={styles.item} key={products.id}>
                            <img className={styles.img} src={products.image} alt={products} />
                            <h5> {products.title} {products.id}</h5>
                            <div>
                                <small>{products.price}€</small>
                            </div>
                            <button className={styles.button}>Añadir</button>
                        </div>
                    )
                }
            </div>


        </div>
    )
}


export const getStaticProps = async () => {

    const response = await fetch('http://localhost:3000/api/products');
    const data = await response.json();

    return {
        props: { data }
    }
}


export default Products