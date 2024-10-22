import styled from './Page.module.scss';

interface pageProps {
    children: any
}

export default function Page(props: pageProps) {
    return (
        <div className={styled.page}>
            {props.children}
        </div>
    )
}