import React from "react";
import styles from './AppLoader.module.scss';

function AppLoader () {
    return(
        <div className={styles.loaderContainer}> 
            <span className={styles.loaderText}>Загрузка...</span>
            <span className={styles.loader}></span>
        </div>
    );
};

export default AppLoader;