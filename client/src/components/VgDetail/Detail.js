import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearPage, getDetails } from "../../actions/details/details.action";
import { Link } from "react-router-dom";
import notf from "../img/tanjiro.jpg";
import s from "./Details.module.css";

function Details(props) {
  const {
    match: {
      params: { id },
    },
  } = props;
  const dispatch = useDispatch();
  const details = useSelector((state) => state.details);

  useEffect(() => {
    dispatch(getDetails(id));
    return () => dispatch(clearPage());
  }, [id, dispatch, clearPage]);
  console.log(details);

  return (
    <div className={s.background}>
      {details.length > 0 ? (
        <div className={s.container}>
          <h3 className={s.title}>{details[0].name}</h3>
          {details[0].background_image ? (
            <img
              className={s.imageVg}
              src={details[0].background_image}
              alt="game IMG"
              width="400px"
              height="300px"
            />
          ) : (
            <img src={notf} alt="game IMG" />
          )}
          <h4 className={s.description}>{details[0].description}</h4>
          <h4 className={s.data}>{`Platforms: ${details[0].platforms.map(
            (p) => p.name
          )}`}</h4>
          <h4 className={s.data}>{`Genres: ${details[0].genres.map(
            (g) => g.name
          )}`}</h4>
          <h4 className={s.data}>{`Rating:  ${details[0].rating}`}</h4>
          <h4 className={s.data}>{`Released: ${details[0].released}`}</h4>
          <Link to="/home">
            <button className={s.btn}>HOME</button>
          </Link>
        </div>
      ) : (
        <div className={s.container}>
          <h3 className={s.title}>{details.name}</h3>
          {details.background_image ? (
            <img
              className={s.imageVg}
              src={details.background_image}
              alt="game IMG"
              width="400px"
              height="300px"
            />
          ) : (
            <img src={notf} alt="game IMG" />
          )}
          <h4 className={s.description}>{details.description}</h4>
          <h4 className={s.data}>{`Platforms: ${details.platforms}`}</h4>
          <div>
            {details.genres?.length > 0 &&
              details.genres?.map((e, key) => (
                <h4 className={s.data} key={key}>
                  {`Genres: ${e.name ? e.name : e}`}
                </h4>
              ))}
          </div>
          <h4 className={s.data}>{`Rating:  ${details.rating}`}</h4>
          <h4 className={s.data}>{`Released: ${details.released}`}</h4>
          <Link to="/home">
            <button className={s.btn}>HOME</button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Details;
