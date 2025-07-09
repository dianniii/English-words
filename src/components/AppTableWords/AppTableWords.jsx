import AppTableRow from "./AppTableRow";
import styles from "./AppTable.module.scss";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import {useWordsContext} from "../../hooks/useWordsContext";
import AppLoader from "../AppLoader/AppLoader";




function AopTableWords() {
    const { words, loading } = useWordsContext();

    return (
            <table className={styles.table}>
                <thead>
                    <tr className={styles.headerRow}>
                        <th className={styles.headerCell}>СЛОВО</th>
                        <th className={styles.headerCell}>ТРАНСКРИПЦИЯ</th>
                        <th className={styles.headerCell}>ПЕРЕВОД</th>
                        <th className={styles.headerCell}>ДЕЙСТВИЕ</th>
                    </tr>
                </thead>
                <tbody>
                    {loading ? (
                        <tr>
                            <td colSpan="4">
                                <AppLoader />
                            </td>
                        </tr>
                    ) : (
                        words.map((word) => (
                            <ErrorBoundary key={word.id}>
                                <AppTableRow key={word.id} word={word} />
                            </ErrorBoundary>
                        ))
                    )}
                </tbody>
            </table>
    );
}

export default AopTableWords;