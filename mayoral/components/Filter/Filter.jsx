import React from 'react'
import styles from '../../styles/Filter.module.css'


export default function Filter({ handleHigh, handleLow }) {

    return (
        <div>
            <div className={styles.filter}>
                <button className={styles.btn1} onClick={handleHigh}>+</button>
                <button className={styles.btn2} onClick={handleLow}>-</button>
            </div>
        </div>
    )
}



