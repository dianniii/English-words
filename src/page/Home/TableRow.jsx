import { useState } from 'react';
import useFormValidation from '../../hooks/useFormValidation'; // Путь к вашему хуку
import { useWordsContext } from '../../hooks/useWordsContext'; // Импорт контекста
import styles from './Table.module.scss';

function TableRow({ word }) {
  const [isEditing, setIsEditing] = useState(false);

  const {
    value,
    errors,
    validateValue,
    handleChange,
    resetErrors,
    setValue,
  } = useFormValidation({
    id: word.id,
    english: word.english,
    transcription: word.transcription,
    russian: word.russian,
  });

  const handleClose = () => {
    setIsEditing(false);
    setValue({ 
      id: word.id,
      english: word.english,
      transcription: word.transcription,
      russian: word.russian 
    });
    resetErrors();
  };

  const { updateExistingWord, setIsDelete } = useWordsContext();

  const handleSave = async () => {
    if (validateValue()) {
      console.log('Параметры формы', value);

      if (!value.id || isNaN(value.id)) {
        console.error('ID невалидный или отсутствует:', value.id);
        alert('Произошла ошибка: некорректный ID');
        return;
      }

      try {
        await updateExistingWord(value.id, value);
        console.log('Изменения сохранены на сервере');
      } catch (error) {
        console.log('Ошибка при сохранении на сервере:', error);
        alert('Произошла ошибка при сохранении на сервере. Пожалуйста, попробуйте снова.');
        return;
      }
      
      setIsEditing(false);
      resetErrors();
    } else {
      alert("Проверьте точность данных. Поле 'english' должно содержать только латинские буквы, а все поля не должны содержать цифры.");
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
  }; 

  const handDelete = async ()=>{
    const confirmDelete = window.confirm('Вы уверенны, что хотите удалить это слово?');
    if(confirmDelete){
      console.log('Удаляем слово с ID:', word.id);
      try{
        await setIsDelete (word.id);
        console.log('Слово успешно удалено');
      } catch (error){
        console.log('Ошибка при удалении слова:', error);
        alert ('Произошла ошибка при удалении. Пожалуйста, попробуйте сноваю');
      }
    }
  }

  const isAnyFieldEmpty = !value.english.trim() || !value.transcription.trim() || !value.russian.trim();
  const isEmpty = (val) => !val || !val.trim();

  return isEditing ? (
    <tr className={styles.headerRow}>
      <td className={styles.headerCell}>
        <input
          type="text"
          value={value.english}
          name="english"
          onChange={handleChange}
          className= {`${isEmpty(value.english) ? styles.invalid : ''}
                        ${errors.english ? styles.invalid : ''}`}
        />
      </td>
      <td className={styles.headerCell}>
        <input
          type="text"
          value={value.transcription}
          name="transcription"
          onChange={handleChange}
          className={`${isEmpty(value.transcription) ? styles.invalid : ''}
                        ${errors.transcription ? styles.invalid : ''}`}
        />
      </td>
      <td className={styles.headerCell}>
        <input
          type="text"
          value={value.russian}
          name="russian"
          onChange={handleChange}
          className={`${isEmpty(value.russian) ? styles.invalid : ''}
                        ${errors.russian ? styles.invalid : ''}`}
        />
      </td>
      <td className={styles.headerCell}>
        <button
          className={styles.buttonSave}
          onClick={handleSave}
          disabled={isAnyFieldEmpty}
        >Сохранить</button>
        <button className={styles.buttonClose}
                onClick={handleClose}>Закрыть</button>
      </td>
    </tr>
  ) : (
    <tr className={styles.row}>
      <td className={styles.headerCell}>{value.english}</td>
      <td className={styles.headerCell}>{value.transcription}</td>
      <td className={styles.headerCell}>{value.russian}</td>
      <td className={styles.headerCell}>
        <button className={styles.buttonEdit}
                onClick={handleEdit}>Изменить</button>
        <button className={styles.buttonDelete}
                onClick={handDelete}>Удалить</button>
      </td>
    </tr>
  );
}

export default TableRow;


