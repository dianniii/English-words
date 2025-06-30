import { useState } from 'react';

const useFormValidation = (initialState) => {
  const [value, setValue] = useState(initialState);
  const [errors, setErrors] = useState({
    english: false,
    transcription: false,
    russian: false,
  });

  const isEmpty = (val) => !val || !val.trim();
  const isEnglish = (val) => /^[a-zA-Z\s]+$/.test(val);
  const hasNumbers = (val) => /\d/.test(val);

  const validateValue = () => {
    let newErrors = {
      english: false,
      transcription: false,
      russian: false,
    };
    let isValid = true;

    if (isEmpty(value.english) || !isEnglish(value.english) || hasNumbers(value.english)) {
      newErrors.english = true;
      isValid = false;
    }

    if (isEmpty(value.transcription) || hasNumbers(value.transcription)) {
      newErrors.transcription = true;
      isValid = false;
    }

    if (isEmpty(value.russian) || hasNumbers(value.russian)) {
      newErrors.russian = true;
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValue(prevValue => ({
      ...prevValue,
      [name]: value,
    }));

    setErrors(prevErrors => ({
      ...prevErrors,
      [name]: false,
    }));
  };

  const resetErrors = () => {
    setErrors({
      english: false,
      transcription: false,
      russian: false,
    });
  };

  return {
    value,
    errors,
    validateValue,
    handleChange,
    resetErrors,
    setValue,
  };
};

export default useFormValidation;
