/* Componentes */
import React ,  { useState,useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import './App.css';
import Filter from './/components/Filter/Filter';
import Card from './/components/Card/Card';
import Pagination from "./components/Pagination/Pagination";
import Search from "./components/Search/Search";

function App() {
  let [pageNumber , setPageNumber] = useState(1);
  /* Filtros */
  let [search, setSearch] = useState(" ");
  let[status , setStatus] = useState("")
  let[gender , setGender] = useState("")
  let[species , setSpecies] = useState("")


  let[fetchedData , updateFetchedData] = useState([]);
  let {info , results} = fetchedData;
  
  console.log(results);
  /* Api de ricky y morty */
  let api =  `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;
  /* useEffect*/
  useEffect(() => {
    (async function(){
      let data = await fetch(api).then(res => res.json());
      updateFetchedData(data)
    }) ();
  },[api]);





  return (
    <div className="App">
      {/* Titulo */}
      <h1 className="text-center ubuntu my-4">
        Rick and <span className="text-success">Morty</span> 
      </h1>
      {/* Buscador */}
      <Search setPageNumber={setPageNumber} setSearch={setSearch}/>

      {/* Containers */}
      <div className="container">
        <div className="row">
          {/* Filtros */}  
            <Filter 
            setSpecies={setSpecies}
            setGender={setGender} 
            setStatus={setStatus} 
            setPageNumber={setPageNumber}
            />
          <div className="col-8">
            {/* Tarjetas */}
            <div className="row">
             <Card results={results} />
            </div>
          </div>
        </div>
      </div>
      {/* Navegar entre paginas*/}

      <Pagination
       info={info} 
       pageNumber={pageNumber} 
       setPageNumber={setPageNumber} 
       />
    </div>
  );
}

export default App;
