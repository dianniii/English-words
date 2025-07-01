import { useState } from "react";
import styles from "./AppWordCard.module.scss";
import Button from "../AppButton/AppButton";

const WordCard = ({ word, onViewTranslation }) => { 
    const [isButtonPressed, setIsButtonPressed] = useState(false);

    if (!word) {
        return null;
    }
    
    const { english, transcription, russian } = word;

    const handleButtonClick = () => {
        setIsButtonPressed(!isButtonPressed);
        if (!isButtonPressed) {
            onViewTranslation(); // Увеличиваем счетчик слов, когда перевод показывается
        }
    };

    return (
        <div className={styles.cardContent}>
            <div className={styles.cardDetails}>{english}</div>
            <div className={styles.cardDetails}>{transcription}</div>
            {isButtonPressed ? (
                <div>
                    <div className={styles.cardDetails}>{russian}</div>
                    <div className={styles.buttonWrapper}>
                        <Button type='close' text="Закрыть" onClick={handleButtonClick} />
                    </div>
                </div>
            ) : (
                <Button type='check' text="Проверить" onClick={handleButtonClick} />
            )}
        </div>
    );
};

export default WordCard;




