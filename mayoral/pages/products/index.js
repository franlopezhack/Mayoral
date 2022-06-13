import { useState, useEffect } from 'react';
import Filter from '../../components/Filter/filter';
import styles from '../../styles/Products.module.css'



export const getStaticProps = async () => {

    const response = await fetch('http://localhost:3000/api/products');
    const data = await response.json();

    return {
        props: { data }
    }
}



function Products({ data }) {

    const [sortPrice, setSortPrice] = useState(data)
    const [searchTerm, setSearchTerm] = useState('')

    useEffect(() => {

        setSortPrice()

    }, [sortPrice])

    function handleLow() {
        setSortPrice(
            data.sort((a, b) => a.price - b.price)
        )
    }

    // console.log(data)

    function handleHigh() {
        setSortPrice(
            data.sort((a, b) => b.price - a.price)
        )
    }

    return (
        <div className={styles.container}>
            <h1>Productos</h1>
            <input
                className={styles.input}
                onChange={event => { setSearchTerm(event.target.value) }}
                id='city'
                type="search"
                name="title"

                placeholder="Nombre producto..." />
            <div className={styles.filters}>
                <Filter
                    handleHigh={handleHigh}
                    handleLow={handleLow}
                />
            </div>

            <div className={styles.card}>
                {
                    data.filter((val) => {
                        if (searchTerm === '') {
                            return val
                        } else if (val.title.toLowerCase().includes(searchTerm.toLocaleLowerCase())) {
                            return val
                        }
                    }).map((products) =>
                        <div className={styles.item} key={products.id}>
                            <img className={styles.img} src={products.image} alt={products} />
                            <h5> {products.title}</h5>
                            <div>
                                <small>{products.price}€</small>
                            </div>
                            <button className={styles.button}>AÑADIR</button>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Products