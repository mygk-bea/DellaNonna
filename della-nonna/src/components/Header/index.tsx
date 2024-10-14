import styles from './Header.module.scss';
import logo from '../../assets/images/Logo.svg';
import icon_search from '../../assets/icons/search.svg';

export default function Header({ display='none' }) {
    return (
        <header className={styles.header}>
            <div className={styles.header__logo}>
                <img src={logo} alt="Logo Della Nonna" />
            </div>

            <div className={styles.header__search} style={{ display }}>
                <input type="text" className={styles.header__search__bar} placeholder='Procurar uma receita...'/>
                <button className={styles.header__search__btn}>
                    <img src={icon_search} alt="Ícone Pesquisar" />
                </button>
            </div>
        </header>
    );
}