import styled from './BoxContainer.module.scss';

interface boxContainerProps {
    children: any;
    hasMenu?: boolean;
}

export default function BoxContainer(props: boxContainerProps) {
    
    return (
        <div className={`${styled.content} ${props.hasMenu ? styled.hasMenu : ''}`}>
            {props.children}
        </div>
    );
}
