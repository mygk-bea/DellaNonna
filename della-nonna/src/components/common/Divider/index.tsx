import styled from './Divider.module.scss';

interface dividerProps {
    horizontal?: any;
}

export default function Divider(props: dividerProps) {
    return (
        <div className={`${styled.divider} ${props.horizontal ? styled.horizontal : ''}`}></div>
    );
}