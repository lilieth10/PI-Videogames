import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getVideogames } from "../../actions/videogames/videogames.action";
import Card from "../VgCard/VgCard";
import NavBar from "../NavBar/NavBar";
import Paginate from "../Paginate/Paginate";
import FilterSort from "../Filters/FilterSort";
import FilterRating from "../Filters/FilterRating";
import FilterGenre from "../Filters/FilterGenre";
import FilterCreate from "../Filters/FilterCreate";
import SearchBar from "../SearchBar/SearchBar";
import Loading from "../Loading/Loading";
import s from "./Home.module.css";

export function Home({ allVgames, getAllVideogames }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [order, setOrderName] = useState("");
  const [rating, setOrderRating] = useState("");
  const [loading, setLoading] = useState(true);
  const videogamesPerPage = 15;
  const lastVg = currentPage * videogamesPerPage;
  const firstVg = lastVg - videogamesPerPage;
  const currentVideogames = allVgames.slice(firstVg, lastVg);

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    getAllVideogames();
  }, []);
  console.log(allVgames);

  return (
    <div className={s.imgfondo}>
      <NavBar />
      <div>
        <FilterSort setOrderName={setOrderName} />
        <FilterRating setOrderRating={setOrderRating} />
        <FilterGenre />
        <FilterCreate />
        <SearchBar />
      </div>
      <div>
        <Paginate
          videogamesPerPage={videogamesPerPage}
          allVgames={allVgames.length}
          paginado={paginado}
        />
      </div>
      <>
        <div className={s.container}>
          {currentVideogames.length > 0 ? (
            currentVideogames.map((c) => {
              return (
                <>
                  <Card
                    name={c?.name}
                    image={c?.img || c?.background_image}
                    genres={c.genres?.map((g) => g.name)}
                    rating={c?.rating}
                    key={c?.id}
                    id={c?.id}
                  />
                </>
              );
            })
          ) : (
            <Loading setLoading={setLoading} />
          )}
        </div>
      </>
    </div>
  );
}

export const mapStateToProps = (state) => {
  return {
    allVgames: state.videogames,
  };
};

//Despacho la accion que necesito
export const mapDispatchToProps = (dispatch) => {
  return {
    getAllVideogames: () => dispatch(getVideogames()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
