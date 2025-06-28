    const API_BASE_URL = 'http://localhost:3001/words';
    // нужно ли выделять файл или папку для константс?

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