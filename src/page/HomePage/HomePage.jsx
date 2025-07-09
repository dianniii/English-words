import React from 'react';
import styles from './HomePage.module.scss';
import AppTableWords from '../../components/AppTableWords/AppTableWords';

function HomePage() {
  return (
    <div className={styles.homePage}>
      <h2 className={styles.title}>Список слов</h2>
      <AppTableWords />
    </div>
  );
}

export default HomePage;