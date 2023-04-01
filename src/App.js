/* Componentes */
import React ,  { useState,useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import './App.css';
import Filter from './/components/Filter/Filter';
import Card from './/components/Card/Card';
import Pagination from "./components/Pagination/Pagination";
import Search from "./components/Search/Search";
import NavBar from './components/Navbar/Navbar';


/* Paginas de episodios , localizacion */
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import Episodes from './Pages/Episodes'
import Location from "./Pages/Location";

/* Detalles de los personajes */
import CardDetails from "./components/Card/CardDetails";


function App() {

  return(
    <Router>
      <div className="App">
        <NavBar />
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<CardDetails />} />

        <Route path="/episodes" element={<Episodes />} />
        <Route path="/episodes/:id" element={<CardDetails />} />

        <Route path="/location" element={<Location />} />
        <Route path="/location/:id" element={<CardDetails />} />
      </Routes>

    </Router>
  )
  
}



const Home = () => {
  let [pageNumber , setPageNumber] = useState(1);
  /* Filtros */
  let [search, setSearch] = useState(" ");
  let[status , setStatus] = useState("")
  let[gender , setGender] = useState("")
  let[species , setSpecies] = useState("")


  let[fetchedData , updateFetchedData] = useState([]);
  let {info , results} = fetchedData;
  

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
          <div className="col-8 col-12">
            {/* Tarjetas */}
            <div className="row">
             <Card page="/" results={results} />
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
