import styled from './Footer.module.scss';
import icon_arrow from '../../../assets/icons/icon_arrow.svg';
import fullHeart from '../../../assets/icons/icon_heart.svg';
import outlineHeart from '../../../assets/icons/icon_heart-outline.svg';

interface footerProps {
    next?: () => void;
    previous?: () => void;
    index: number;
    size: number;
    fav: boolean;
}

export default function Footer(props: footerProps) {
    return (
        <div className={styled.footer}>
            <div className={styled.footer__btn}>
                <button id={styled.back} onClick={props.previous} disabled={props.index === 0}>
                    <img src={icon_arrow} alt="Seta para Receita Anterior" />
                    <p>Anterior</p>
                </button>
            </div>
            <div className={styled.fav}>
                <img src={props.fav ? fullHeart: outlineHeart} alt="Receita Favorita" />
            </div>
            <div className={styled.footer__btn}>
                <button id={styled.next} onClick={props.next} disabled={props.index === props.size - 1}>
                    <p>Próximo</p>
                    <img src={icon_arrow} alt="Seta para Próxima Receita" />
                </button>
            </div>
        </div>
    )
}