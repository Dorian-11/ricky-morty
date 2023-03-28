import React from 'react'
import styles from './Search.module.scss'

const Search = ({setSearch,setPageNumber}) => {
  return <form className='d-flex justify-content-center gap-4 mb-5'>
    <input 
    onChange={e=>{
        setPageNumber(1);
        setSearch(e.target.value);
    }}
    placeholder='Encuentra los personajes' 
    type="text" 
    className={styles.input}
    />
    
        <button onClick={e=>{e.preventDefault();
        }} 
        className={`${styles.btn}btn btn-success fs-5`}
        >
        Buscar
        </button>
  </form>
  
}

export default Search;

/* Para que se adapte a la pagina  */