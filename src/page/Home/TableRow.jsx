import { useState } from "react";
import styles from "./Table.module.css";

function TableRow({ word }) {
  const [isEditing, setIsEditing] = useState(false);

  const [value, setValue] = useState({
    english: word.english,
    transcription: word.transcription,
    russian: word.russian,
  });

  const [errors, setErrors] = useState({
    english: false,
    transcription: false,
    russian: false
  });
  // Проверка на пустоту
  const isEmpty = (val) => !val.trim();

  // Проверка: только английские буквы и пробелы
  const isEnglish = (val) => /^[a-zA-Z\s]+$/.test(val);

  // Проверка: отсутствие цифр
  const hasNumbers = (val) => /\d/.test(val);

  // функция для валидации всех полей
  const validateValue = () => {
    let newErrors = {
      english: false,
      transcription: false,
      russian: false
    };
    let isValid = true;

    // english
    if (isEmpty(value.english) || !isEnglish(value.english) || hasNumbers(value.english)) {
      newErrors.english = true;
      isValid = false;
    }

    // transcription: без цифр*
    if (isEmpty(value.transcription) || hasNumbers(value.transcription)) {
      newErrors.transcription = true;
      isValid = false;
    }

    // translation: без цифр*
    if (isEmpty(value.russian) || hasNumbers(value.russian)) {
      newErrors.russian = true;
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleClose = () => {
    setIsEditing(false);
    setValue({ ...word });
    setErrors({
      english: false,
      transcription: false,
      russian: false
    });
  };

  const handleSave = () => {
    if (validateValue()) {
    console.log('Параметры формы:', value);
      setIsEditing(false);
      setErrors({
        english: false,
        transcription: false,
        russian: false
      });
    } else {
      alert("Check the data accuracy: the 'english' field should contain only Latin letters, and all fields should not contain numbers.");
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setValue(prevValue => ({
      ...prevValue,
      [name]: value,
    }));
    // При каждом вводе сразу убирает ошибку если поле стало валидным
    setErrors(prevErrors => ({
      ...prevErrors,
      [name]: false
    }));
  };

  const isAnyFieldEmpty = !value.english.trim() ||
                          !value.transcription.trim() ||
                          !value.russian.trim();

  return isEditing ? (
    <tr className={styles.row}>
      <td className={styles.headerCell}>
        <input
          type="text"
          value={value.english}
          name="english"
          onChange={handleChange}
          className={
            `${isEmpty(value.english) ? styles.invalid : ''}
            ${errors.english ? styles.invalid : ''}`
          }
          placeholder="Only English letters"
        />
      </td>
      <td className={styles.headerCell}>
        <input
          type="text"
          value={value.transcription}
          name="transcription"
          onChange={handleChange}
          className={
            `${isEmpty(value.transcription) ? styles.invalid : ''}
            ${errors.transcription ? styles.invalid : ''}`
          }
        />
      </td>
      <td className={styles.headerCell}>
        <input
          type="text"
          value={value.russian}
          name="russian"
          onChange={handleChange}
          className={
            `${isEmpty(value.russian) ? styles.invalid : ''}
            ${errors.russian ? styles.invalid : ''}`
          }
        />
      </td>
      <td className={styles.headerCell}>
        <button
          className={styles.buttonSave}
          onClick={handleSave}
          
          disabled={isAnyFieldEmpty}
        >Save</button>
        <button className={styles.buttonClose}
                onClick={handleClose}>Close</button>
      </td>
    </tr>
  ) : (
    <tr className={styles.row}>
      <td className={styles.headerCell}>{value.english}</td>
      <td className={styles.headerCell}>{value.transcription}</td>
      <td className={styles.headerCell}>{value.russian}</td>
      <td className={styles.headerCell}>
        <button className={styles.buttonEdit}
                onClick={handleEdit}>Edit</button>
        <button className={styles.buttonDelete}>Delete</button>
      </td>
    </tr>
  );
}

export default TableRow;

