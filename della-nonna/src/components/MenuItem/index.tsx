import styled from './MenuItem.module.scss';

interface itemMenuProps {
    namepage: string,
    iconSVG: string
}

export default function MenuItem(props: itemMenuProps) {
    return(
        <div className={styled.item}>
            <div className={styled.inner}>
                <p className={styled.item__namepage}>{props.namepage}</p>
            </div>
            <img src={props.iconSVG} alt={props.namepage} />
        </div>
    );
}