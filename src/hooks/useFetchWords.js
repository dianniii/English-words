import { useState, useEffect } from 'react';
import { fetchWords } from '../api';

const useFetchWords = () => {
    const [words, setWords] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadWords = async () => {
            try {
                const words = await fetchWords();
                setWords(words);
            } catch (err) {
                console.error('Error when loading words:', err);
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        loadWords();
    }, []);

    return { words, loading, error };
};

export default useFetchWords;
