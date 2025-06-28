import React from "react";
import { Link } from "react-router-dom";
import notFoundPage from '../../assets/20.png';
import styles from './NotFoundPage.module.css';
import error from '../../assets/404.png';
import { ROUTES } from '../../routes';

function NotFoundPage (){
    return (
        <div className={styles.conteinerError}>
            <div className={styles.infoError}>
                <div>
                    <img src={error} alt="error404" />
                    <h1>OOOps!</h1>
                    <h2>Page Not Found</h2>
                </div>
                <Link to={ROUTES.HOME} >
                    <button className={styles.backHome}>Back to homepage</button>
                </Link>
            </div>
            <img  className={styles.errorImg} src={notFoundPage} alt="page not found"/>
        </div>
    )
};
export default NotFoundPage;

