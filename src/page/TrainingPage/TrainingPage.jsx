import React from 'react';
import styles from './TrainingPage.module.scss';
import AppCarousel from '../../components/AppCarousel/AppCarousel';

function TrainingPage() {
  return (
    <div className={styles.trainingPage}>
      <h2 className={styles.title}>Проверь себя</h2>
      <AppCarousel />
    </div>
  );
}

export default TrainingPage;