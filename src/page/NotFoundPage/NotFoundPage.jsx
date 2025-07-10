import React from "react";
import { Link } from "react-router-dom";
import notFoundPage from '../../assets/20.png';
import styles from './NotFoundPage.module.scss';
import error from '../../assets/404.png';
import { ROUTES } from '../../constants/routes';

function NotFoundPage (){
    return (
        <div className={styles.conteinerError}>
            <div className={styles.infoError}>
                <div>
                    <img src={error} alt="error404" />
                    <h2>Упссс!</h2>
                    <h2>Страница не найдена</h2>
                </div>
                <Link to={ROUTES.HOME} >
                    <button className={styles.backHome}>Вернуться на главную</button>
                </Link>
            </div>
            <img  className={styles.errorImg} src={notFoundPage} alt="page not found"/>
        </div>
    )
};
export default NotFoundPage;

