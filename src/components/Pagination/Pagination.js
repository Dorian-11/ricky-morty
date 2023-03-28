import React from 'react';
import ReactPaginate from 'react-paginate';


const Pagination = ({info, pageNumber, setPageNumber}) => {
    /* Activamos la barra de pagina */
  return  <ReactPaginate 
  className='pagination justify-content-center gap-4 my-4'
  forcePage={pageNumber === 1? 0 : pageNumber - 1}
  nextLabel="Siguiente"
  previousLabel="Retroceder"
  nextClassName='btn btn-dark'
  previousClassName='btn btn-dark'
  pageClassName='page-item'
  pageLinkClassName='page-link'
  activeClassName='active'
  onPageChange={(data) => 
    {console.log(data.selected + 1);
    }}
  pageCount={info?.pages } 
  />
};
    

export default Pagination;
    
  

/* 2 horas */