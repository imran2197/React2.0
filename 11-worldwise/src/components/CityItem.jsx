import React from "react";
import styles from "./CityItem.module.css";
import { convertToFlagUrl } from "../utils/ConverToFlagUrl";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "long",
  }).format(new Date(date));

const CityItem = ({ city }) => {
  console.log(city);
  const { cityName, emoji, date } = city;
  return (
    <li className={styles.cityItem}>
      <span className={styles.emoji}>
        <img
          src={convertToFlagUrl(emoji)}
          alt="flag"
          className={styles.emoji}
        />
      </span>
      <h3 className={styles.name}>{cityName}</h3>
      <time className={styles.date}>{formatDate(date)}</time>
      <button className={styles.deleteBtn}>&times;</button>
    </li>
  );
};

export default CityItem;
