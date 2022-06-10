import React from 'react'
import styles from '../../styles/Filter.module.css'

export default function Filter({handleHigh, handleLow}) {


    return (
        <div className={styles.filter}>
            <button className={styles.btn1} onClick={handleHigh}>+</button>
            <button className={styles.btn2} onClick={handleLow}>-</button>
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