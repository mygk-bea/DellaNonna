import styled from './Header.module.scss';
import logo from '../../../assets/images/Logo.svg';
import icon_search from '../../../assets/icons/icon_search.svg';

export default function Header({ display='none' }) {
    return (
        <header className={styled.header}>
            <div className={styled.header__logo}>
                <img src={logo} alt="Logo Della Nonna" />
            </div>

            <div className={styled.header__search} style={{ display }}>
                <input type="text" className={styled.header__search__bar} placeholder='Procurar uma receita...'/>
                <button className={styled.header__search__btn}>
                    <img src={icon_search} alt="Ícone Pesquisar" />
                </button>
            </div>
        </header>
    );
}