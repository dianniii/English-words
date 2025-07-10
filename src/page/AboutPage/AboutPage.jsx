import React from "react";
import { features } from "../../constants/features";
import styles from './AboutPage.module.scss';


function AboutPage (){
    return(
        <div className={styles.page}>
            <h2 className={styles.title}>Добро пожаловать в EngliGrow!</h2>
            <p className={styles.text}>EngliGrow — Ваш личный помощник в освоении английского языка. Расширяйте свой словарный запас легко и удобно, следя за прогрессом на каждом этапе.</p>

            <div  className={styles.cards}>
                {features.map(({ icon, title, description }) => (
                <div key={title} className={styles.card}>
                    <div className={styles.icon}>{icon}</div>
                    <h3 className={styles.cardTitle}>{title}</h3>
                    <p className={styles.cardDescription}>{description}</p>
                </div>
        ))}
        </div>
        </div>
    )
};

export default AboutPage;