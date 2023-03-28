import React from "react";
import Gender from "../Filter/Category/Gender";
import Species from "../Filter/Category/Species";
import Status from "../Filter/Category/Status";


const Filter = ({
  pageNumber,
  setPageNumber,
  setStatus,
  setGender,
  setSpecies,
}) => {
  let clear = () => {
    setStatus("");
    setGender("");
    setSpecies("");
    setPageNumber(1);
    window.location.reload(false);
  };
  return (
    <div className="col-lg-3 col-12 mb-5">
      <div className="text-center fw-bold fs-4 mb-2">Filtros</div>
      <div
        style={{ cursor: "pointer" }}
        onClick={clear}
        className="text-success text-decoration-underline text-center mb-3"
      >
        Borrar Filtros
      </div>
      <div className="accordion" id="accordionExample">
        <Status
          setPageNumber={setPageNumber}
          setStatus={setStatus}
        />
        <Species
          setPageNumber={setPageNumber}
          setSpecies={setSpecies}
        />
        <Gender
          setPageNumber={setPageNumber}
          setGender={setGender}
        />
      </div>
    </div>
  );
};

export default Filter;