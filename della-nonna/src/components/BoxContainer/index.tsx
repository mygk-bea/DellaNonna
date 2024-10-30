import styled from './BoxContainer.module.scss';

interface boxContainerProps {
    children: any;
}

export default function BoxContainer(props: boxContainerProps) {
    
    return (
        <div className={styled.content}>
            {props.children}
        </div>
    );
}
