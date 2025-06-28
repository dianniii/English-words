import TableRow from "./TableRow";
import styles from "./Table.module.css";
import ErrorBoundary from "../../components/ErrorBoundary/ErrorBoundary";
import useFetchWords from "../../hooks/useFetchWords";


function TableWords() {
    const { words, loading } = useFetchWords();

    return (
        <table className={styles.table}>
            <thead>
                <tr className={styles.headerRow}>
                    <th className={styles.headerCell}>ENGLISH</th>
                    <th className={styles.headerCell}>TRANSCRIPTION</th>
                    <th className={styles.headerCell}>TRANSLATION</th>
                    <th className={styles.headerCell}>ACTION</th>
                </tr>
            </thead>
            <tbody>
                {loading ? (
                    <tr>
                        <td colSpan="4" className={styles.loader}>Loading...</td>
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