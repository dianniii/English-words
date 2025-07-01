import React from "react";
import { Link } from "react-router-dom";
import styles from './Header.module.scss';
import logo from '../assets/book_4165304.png';
import { ROUTES } from "../routes";

function Header () {
    return (
        <header className={styles.headerConteiner}>
            <Link className={styles.conteinerLogo} to={'/'}>
                <img className={styles.logo} src={logo} alt="Logo"/>
                <h1 className={styles.title}>ENG</h1>
            </Link>
            <nav>
                <ul className={styles.nav}>
                    <li>
                        <Link to={ROUTES.HOME} className={styles.itemsNav}>ГЛАВНАЯ </Link >
                    </li>
                    <li>
                        <Link to={ROUTES.TRAIN} className={styles.itemsNav}>ТРЕНИРОВКА </Link >
                    </li>
                    <li>
                        <Link to={ROUTES.ADD_WORD} className={styles.itemsNav}>ДОБАВИТЬ СЛОВО </Link >
                    </li>
                    <li>
                        <Link to={ROUTES.WORDS} className={styles.itemsNav}>СЛОВА </Link >
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;