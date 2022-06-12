import { useState } from 'react'
import styles from '../../styles/SearchBar.module.css'


const SearchBar = () => {

    const [query, setQuery] = useState('')

   

    const onChange = async (e) => {
        const { value } = e.target;
        setQuery(value);

        if (value.length > 3) {
            const response = await fetch(`/api/products?title=${value}`);
            const data = await response.json();
            console.log(data);
        }
    }


    return (
        <input
            className={styles.input}
            onChange={onChange}
            id='title'
            type="search"
            name="title"
            value={query}
            placeholder="Nombre producto..." />
    )
}

export default SearchBar


