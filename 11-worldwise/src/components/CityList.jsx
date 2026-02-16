import { useCities } from "../contexts/CitiesContext";
import CityItem from "./CityItem";
import styles from "./CityList.module.css";
import Message from "./Message";
import Spinner from "./Spinner";

// eslint-disable-next-line react/prop-types
const CityList = () => {
  const { cities, isLoading } = useCities();
  if (isLoading) return <Spinner />;
  // eslint-disable-next-line react/prop-types
  if (!cities?.length)
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    );
  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
};

export default CityList;
