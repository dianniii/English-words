import React from 'react';
import useFetchWords from '../hooks/useFetchWords'; // импорт вашего хука
import {ContextWords} from '../../const'; // импорт вашего контекста

const ContextWordsProvider = ({ children }) => {
    const { words, loading, error, isUpdating, isAdding, isDeleting, updateExistingWord, addNewWord, setIsDelete } = useFetchWords();

    const data = {
        words,
        loading,
        error,
        isUpdating,
        isAdding,
        isDeleting,
        updateExistingWord,
        addNewWord,
        setIsDelete
    };

    return (
        <ContextWords.Provider value={data}>
            {children}
        </ContextWords.Provider>
    );
};

export default ContextWordsProvider;

