import styles from '../../styles/SearchBar.module.css'


function SearchBar({ data }) {
    return (
        <input className={styles.input} type="search" name="search" placeholder="Nombre producto..." />
    )
}

export default SearchBar



export const getStaticProps = async (context) => {
    const id = context.params.id
    const response = await fetch('http://localhost:3000/api/products' + id);
    const data = await response.json();

    return {
        props: { data }
    }
}