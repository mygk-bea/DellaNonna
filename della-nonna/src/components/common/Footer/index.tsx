import styled from './Footer.module.scss';
import icon_arrow from '../../../assets/icons/icon_arrow.svg';

export default function Footer() {
    return (
        <div className={styled.footer}>
            <div className={styled.footer__btn}>
                <button id={styled.back}>
                    <img src={icon_arrow} alt="Seta para Receita Anterior" />
                    <p>Anterior</p>
                </button>
            </div>
            <div className={styled.footer__btn}>
                <button id={styled.next}>
                    <p>Próximo</p>
                    <img src={icon_arrow} alt="Seta para Próxima Receita" />
                </button>
            </div>
        </div>
    )
}