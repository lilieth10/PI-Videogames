import React from "react";
import { Link } from "react-router-dom";
import s from "./LandingPage.module.css";

export default function LandingPage() {
  return (
    <div className={s.imgFondo}>
      <Link to="/home">
        <button className={s.buttonIngresar}>Ingresar</button>
      </Link>
    </div>
  );
}
