import React, { useState } from 'react';
import { useWordsContext } from '../../hooks/useWordsContext';
import useFormValidation from '../../hooks/useFormValidation';
import styles from './AddWord.module.scss';

const AddWord = () => {
    const { addNewWord, isAdding } = useWordsContext();
    const [message, setMessage] = useState('');
    
    const initialState = {
        english: '',
        transcription: '',
        russian: ''
    };
    
    const {
        value,
        errors,
        validateValue,
        handleChange,
        resetErrors,
        setValue
    } = useFormValidation(initialState);
    
    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!validateValue()) {
            return;
        }

        const newWordData = {
            ...value,
            id: Date.now().toString() // Преобразуем ID в строку
        };

        try {
            await addNewWord(newWordData); 
            setMessage('Успешно добавлено!'); // Сообщение об успешном добавлении
            setValue(initialState); // Сбрасываем форму
            resetErrors(); // Сбрасываем ошибки
        } catch (error) {
            setMessage('Произошла ошибка при добавлении слова.'); 
            console.log('Ошибка при сохранении на сервере:', error); // Обработка ошибки
        }
    };

    return (
        <div className={styles.container}>
            <h1>Добавить слово</h1>
            <div className={styles.addWord}>
                <form onSubmit={handleSubmit}>
                    <div className={styles.inputContainer}>
                        <h4 className={styles.subtitle}>Английское слово</h4>
                        <input 
                            name="english"
                            value={value.english} 
                            onChange={handleChange} 
                            required 
                            className={`${styles.english} ${errors.english ? styles.invalid : ''}`} 
                        />
                        {errors.english && <p className={styles.error}>Введите корректное английское слово</p>}
                    </div>
                    <div className={styles.inputContainer}>
                        <h4 className={styles.subtitle}>Транскрипция</h4>
                        <input 
                            name="transcription"
                            value={value.transcription} 
                            onChange={handleChange} 
                            required 
                            className={`${styles.transcription} ${errors.transcription ? styles.invalid : ''}`} 
                        />
                        {errors.transcription && <p className={styles.error}>Введите корректную транскрипцию</p>}
                    </div>
                    <div className={styles.inputContainer}>
                        <h4 className={styles.subtitle}>Перевод</h4>
                        <input 
                            name="russian"
                            value={value.russian} 
                            onChange={handleChange} 
                            required 
                            className={`${styles.russian} ${errors.russian ? styles.invalid : ''}`} 
                        />
                        {errors.russian && <p className={styles.error}>Введите корректный перевод</p>}
                    </div>
                    <div className={styles.buttonContainer}>
                        <button type="submit" disabled={isAdding || !value.english || !value.transcription || !value.russian}>
                            Добавить
                        </button>
                    </div>
                </form> {/* Вывод сообщения об успехе */}
            </div>
            {message && <p className={styles.message}>{message}</p>}
        </div>
    );
};

export default AddWord;


