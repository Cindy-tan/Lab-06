import React from 'react';
import Country from './Country';
import styles from './Countries.module.css';

const Countries = ({ countries }) => {
  // Split countries into two columns
  const midPoint = Math.ceil(countries.length / 2);
  const firstColumn = countries.slice(0, midPoint);
  const secondColumn = countries.slice(midPoint);

  return (
    <div className={styles.countriesContainer}>
      <div className={styles.column}>
        {firstColumn.map((country) => (
          <Country key={country.cca3} country={country} />
        ))}
      </div>
      <div className={styles.column}>
        {secondColumn.map((country) => (
          <Country key={country.cca3} country={country} />
        ))}
      </div>
    </div>
  );
};

export default Countries;
