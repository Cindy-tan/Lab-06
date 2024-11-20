import React from 'react';
import styles from './Country.module.css';

const Country = ({ country }) => {

  const currencies = country.currencies
    ? Object.values(country.currencies)
        .map((currency) => `${currency.name} (${currency.symbol})`)
        .join(', ')
    : 'N/A';

  const languages = country.languages
    ? Object.values(country.languages).join(', ')
    : 'N/A';

  const googleMapsUrl = `https://www.google.com/maps/search/?q=${encodeURIComponent(country.name.common)}&key=AIzaSyDVLA7cINP-382wBc2amQ38UJV5VfB_Xo4`;

  return (
    <div className={styles.countryContainer}>
      <div className={styles.flagContainer}>
        <img src={country.flags.svg} alt={`Flag of ${country.name.common}`} width="100" />
        <h2>{country.name.common}</h2>
      </div>
      <div>
        <span className={styles.dataList}><h3>Official name: &nbsp; </h3> <p>{country.name.official}</p></span>
        <span className={styles.dataList}><h3>Capital: &nbsp; </h3> <p>{country.capital ? country.capital[0] : 'N/A'}</p></span>
        <span className={styles.dataList}><h3>Population: &nbsp;</h3> <p>{country.population.toLocaleString()}</p></span>
        <span className={styles.dataList}><h3>Languages: &nbsp;</h3> <p>{languages}</p></span>
        <span className={styles.dataList}><h3>Currency: &nbsp;</h3> <p>{currencies}</p></span>
        <span className={styles.dataList}><h3>Area km²: &nbsp;</h3> <p>{country.area.toLocaleString()}</p></span>
        <span className={styles.dataList}><h3>Subregion: &nbsp;</h3> <p>{country.subregion}</p></span>
        <span className={styles.dataList}><h3>Continent: &nbsp;</h3> <p>{country.continents.join(', ')}</p></span>
        <span className={styles.dataList}>
          <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
            Show on Google Maps
          </a>
        </span>
      </div>
    </div>
  );
};

export default Country;

