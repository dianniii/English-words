import styles from './AppCardWrapper.module.css';
import useFetchWords from '../../hooks/useFetchWords';

const CardWrapper = ({ children, onPrev, onNext, currentIndex, total, wordsLearned }) => {
  const { loading } = useFetchWords();

  return (
    <div className={styles.cardWrapper}>
      {loading ? (
        <div className={styles.loader}>Loading...</div>
      ) : (
        <>
          <div className={styles.cardControls}>
            <button onClick={onPrev} className={styles.onPrev}>
              <svg width="24" height="24" viewBox="0 0 24 24">
                <polyline points="15 18 9 12 15 6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2" />
              </svg>
            </button>
            {children}
            <button onClick={onNext} className={styles.onNext}>
              <svg width="24" height="24" viewBox="0 0 24 24">
                <polyline points="9 6 15 12 9 18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2" />
              </svg>
            </button>
          </div>
          <div className={styles.result}>
            {currentIndex + 1}/{total}
          </div>
          <div className={styles.learned}>
            Words learned per workout: {wordsLearned}
          </div>
        </>
      )}
    </div>
  );
};
export default CardWrapper;

