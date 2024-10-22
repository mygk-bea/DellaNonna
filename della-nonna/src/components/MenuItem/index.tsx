import styled from './MenuItem.module.scss';

interface menuProps {
    namepage: string,
    iconSVG: string
}

export default function MenuItem(props: menuProps) {
    return(
        <div className={styled.item}>
            <div className={styled.inner}>
                <p className={styled.item__namepage}>{props.namepage}</p>
            </div>
            <img src={props.iconSVG} alt={props.namepage} />
        </div>
    );
}