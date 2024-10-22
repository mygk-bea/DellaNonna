import styled from './Divider.module.scss';

interface dividerProps {
    rotate: any;
}

export default function Divider(props: dividerProps) {
    const rotateStyle = props.rotate ? { transform: 'rotate(90deg)' } : {};

    return (
        <div className={styled.divider} style={rotateStyle}></div>
    );
}