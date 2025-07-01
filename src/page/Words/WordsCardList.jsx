import useFetchWords from "../../hooks/useFetchWords";
import WordCard from "../../components/AppWordCard/AppWordCard";
import styles from "./WordsCardList.module.scss";
import AppLoader from "../../components/AppLoader/AppLoader";

function WordsCardList() {
  const { words, loading } = useFetchWords();
  
  return (
    <div className={styles.cardList}>
      {loading ? (
        <AppLoader />
      ) : (
        words.map((word) => (
          <WordCard word={word} key={word.id} />
        ))
      )}
    </div>
  );
}

export default WordsCardList;

