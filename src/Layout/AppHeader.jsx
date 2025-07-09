import React from "react";
import { Link, NavLink } from "react-router-dom";
import styles from './AppHeader.module.scss';
import logo from '../assets/book_4165304.png';
import { ROUTES } from "../constants/routes";

function AppHeader () {

    return (
        <header className={styles.headerConteiner}>
            <Link className={styles.conteinerLogo} to={ROUTES.ABOUT}>
                <img className={styles.logo} src={logo} alt="Logo"/>
                <h1 className={styles.title}>EngliGrow</h1>
            </Link>
            <nav>
                <ul className={styles.nav}>
                    <li>
                        <NavLink to={ROUTES.HOME} className={({ isActive }) =>
                                            isActive ? styles.active : styles.itemsNav}
                                            >ГЛАВНАЯ 
                        </NavLink >
                    </li>
                    <li>
                        <NavLink to={ROUTES.TRAIN} className={({ isActive }) =>
                                            isActive ? styles.active : styles.itemsNav}>
                                                ТРЕНИРОВКА 
                        </NavLink >
                    </li>
                    <li>
                        <NavLink to={ROUTES.ADD_WORD} className={({ isActive }) =>
                                            isActive ? styles.active : styles.itemsNav}>
                                                ДОБАВИТЬ СЛОВО 
                        </NavLink >
                    </li>
                    <li>
                        <NavLink to={ROUTES.WORDS} className={({ isActive }) =>
                                            isActive ? styles.active : styles.itemsNav}>
                                                СЛОВА 
                        </NavLink >
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default AppHeader;