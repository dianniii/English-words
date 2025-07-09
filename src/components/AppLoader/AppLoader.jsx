import React from 'react';
import styles from './AppLoader.module.scss'

const AppLoader = () => (
  <div className={styles.container}>
    <div className={styles.spinner} />
  </div>
);

export default AppLoader;