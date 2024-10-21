import styled from './Divider.module.scss';

export default function Divider(props) {
    const rotateStyle = props.rotate ? { transform: 'rotate(90deg)' } : {};

    return (
        <div className={styled.divider} style={rotateStyle}></div>
    );
}