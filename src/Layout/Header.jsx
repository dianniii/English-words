import React from "react";
import { Link } from "react-router-dom";
import styles from './Header.module.css';
import logo from '../assets/book_4165304.png';

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
                        <Link to={'/'} className={styles.itemsNav}>HOME </Link >
                    </li>
                    <li>
                        <Link to={'/train'} className={styles.itemsNav}>TRAINING </Link >
                    </li>
                    <li>
                        <Link to={'/words'} className={styles.itemsNav}>WORDS </Link >
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;