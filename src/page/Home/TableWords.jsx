import TableRow from "./TableRow";
import styles from "./Table.module.scss";
import ErrorBoundary from "../../components/ErrorBoundary/ErrorBoundary";
import {useWordsContext} from "../../hooks/useWordsContext";
import AppLoader from "../../components/AppLoader/AppLoader";



function TableWords() {
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
                            <TableRow key={word.id} word={word} />
                        </ErrorBoundary>
                    ))
                )}
            </tbody>
        </table>
    );
}

export default TableWords;