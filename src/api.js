const API_BASE_URL = 'https://itgirlschool.justmakeit.ru/api';

// Получение данных
export const fetchWords = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/words`);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`); 
        }

        const words = await response.json();

        if (!Array.isArray(words)) {
            throw new Error('Invalid data format: expected array');
        }

        return words;
    } catch (error) {
        console.error('Error when loading words:', error);
        throw new Error(`Failed to fetch words: ${error.message}`);
    }
};


// отправка данных

// Отправка нового слова
export const postWord = async (newWordData) => {
    try {
        const response = await fetch(`${API_BASE_URL}/words/add`, {  // Исправил URL
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newWordData) // Передаем данные нового слова
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const createdWord = await response.json();
        return createdWord;
    } catch (error) {
        console.error('Error when creating word:', error);
        throw new Error(`Failed to create word: ${error.message}`);
    }
};
// удаление с сервера
export const deleteWord = async (wordId) => {
    try {
        console.log('Attempting to delete word with ID:', wordId);
        const response = await fetch(`${API_BASE_URL}/words/${wordId}`, { // Исправил шаблонную строку
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            const errorMessage = await response.text(); // Получаем текст ошибки
            throw new Error(`HTTP error! status: ${response.status}, message: ${errorMessage}`);
        }

        return response.status === 204; // Возвращает true, если успешно удалено (204 No Content)
    } catch (error) {
        console.error('Error when deleting word:', error);
        throw new Error(`Failed to delete word: ${error.message}`);
    }
};

// обновление данных
export const updateWord = async (updatedWordData, id) => {
    try {
        id = Number(id);

        const response = await fetch(`${API_BASE_URL}/words/${id}/update`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedWordData)
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const newWord = await response.json();
        return newWord;
    } catch (error) {
        console.error('Error when updating word:', error);
        throw new Error(`Failed to update word: ${error.message}`);
    }
};







