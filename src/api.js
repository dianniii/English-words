const API_BASE_URL = 'http://localhost:3001/words';

// Получение данных
export const fetchWords = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}`);

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
        const response = await fetch(`${API_BASE_URL}`, {
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
        const response = await fetch(`${API_BASE_URL}/${wordId}`, {
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
export const putWord = async (updatedWordData, id) => {
    try {
        // Преобразуем id в число
        id = Number(id); 

        const response = await fetch(`${API_BASE_URL}/${id}`, {
            method: 'PUT',
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
        console.error('Error when posting word:', error);
        throw new Error(`Failed to post word: ${error.message}`);
    }
};






