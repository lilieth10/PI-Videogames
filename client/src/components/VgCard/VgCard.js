import React from "react";
import s from "./VgCard.module.css";
import { Link } from "react-router-dom";

export default function Card({ name, image, genres, id }) {
  return (
    <div className={s.containerCard}>
      <h3 className={s.title}>{name}</h3>
      <h5 className={s.generos}>{`${genres},`}</h5>
      <img className={s.img} src={image} alt="img not found" />
      <Link to={`/detail/${id}`}>
        <button className={s.buttonCard}> Detail </button>
      </Link>
    </div>
  );
}
