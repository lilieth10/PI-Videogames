import React from "react";
import sLoading from "../img/sonic-loading.gif";
import s from "./Loading.module.css";
import { useEffect } from "react";
function Loading({ setLoading }) {
  useEffect(() => {
    return () => {
      setLoading(false);
    };
  });

  return (
    <div className={s.container}>
      <img className={s.sonic} src={sLoading} alt="loading..." />
      <h1 className={s.title}>Loading please wait...</h1>
      {setTimeout(() => {
        setLoading(false);
      }, 5000)}
    </div>
  );
}

export default Loading;
