import { useState, useEffect } from 'react';
import { fetchWords, putWord, postWord, deleteWord } from '../api';

const useFetchWords = () => {
    const [words, setWords] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isUpdating, setIsUpdating] = useState(false);
    const [isAdding, setIsAdding] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false); // Состояние для удаления

    const loadWords = async () => {
        try {
            const wordsResult = await fetchWords();
            setWords(wordsResult);
        } catch (err) {
            console.error('Error when loading words:', err);
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadWords();
    }, []);
    
    const updateExistingWord = async (wordId, updatedWordData) => {
        setIsUpdating(true);
        try {
            const updatedWord = await putWord(wordId, updatedWordData);
            setWords((prevWords) => 
                prevWords.map((word) => word.id === wordId ? updatedWord : word)
            );
        } catch (err) {
            console.error('Error when updating word:', err);
            setError(err);
        } finally {
            setIsUpdating(false);
        }
    };

    const addNewWord = async (newWordData) => {
        setIsAdding(true);
        try {
            await postWord(newWordData);
            await loadWords(); // Перезагрузка списка слов для таблицы
        } catch (err) {
            console.error('Error when adding new word:', err);
            setError(err);
        } finally {
            setIsAdding(false);
        }
    };

    const setIsDelete = async (wordId) => {
        setIsDeleting(true);
        try {
            await deleteWord(wordId);
            setWords((prevWords) => prevWords.filter((word) => word.id !== wordId));
        } catch (err) {
            console.error('Error when deleting word:', err);
            setError(err);
        } finally {
            setIsDeleting(false);
        }
    };

    return { 
        words, 
        loading, 
        error, 
        isUpdating, 
        isAdding, 
        isDeleting, 
        updateExistingWord, 
        addNewWord, 
        setIsDelete // Возвращаем функцию удаления
    };
};

export default useFetchWords;



