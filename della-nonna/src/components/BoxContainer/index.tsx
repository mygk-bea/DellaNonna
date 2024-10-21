import styled from './BoxContainer.module.scss';

export default function BoxContainer(props) {
    return (
        <div className={styled.content}>
            {props.children}
        </div>
    );
}