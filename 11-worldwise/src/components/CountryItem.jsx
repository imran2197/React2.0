import { convertToFlagUrl } from "../utils/ConverToFlagUrl";
import styles from "./CountryItem.module.css";

function CountryItem({ country }) {
  return (
    <li className={styles.countryItem}>
      <span>
        <img
          src={convertToFlagUrl(country.emoji)}
          alt="flag"
          className={styles.emoji}
        />
      </span>
      <span>{country.country}</span>
    </li>
  );
}

export default CountryItem;
