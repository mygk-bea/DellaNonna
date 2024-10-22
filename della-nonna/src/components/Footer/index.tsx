import styled from './Footer.module.scss';
import icon_arrow from '../../assets/icons/icon_arrow.svg';

export default function Footer() {
    return (
        <div className={styled.footer}>
            <div className={styled.footer__btn}>
                <button id={styled.back}>
                    <img src={icon_arrow} alt="Seta para Receita Anterior" />
                    Anterior
                </button>
            </div>
            <div className={styled.footer__btn}>
                <button id={styled.next}>
                    Próximo
                    <img src={icon_arrow} alt="Seta para Próxima Receita" />
                </button>
            </div>
        </div>
    )
}