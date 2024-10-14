import Header from "../../components/Header";
import styles from './Home.module.scss';

export default function Home() {
    return (
        <div className={styles.container}>
            <Header display="flex"></Header>
            <div className={styles.content}>
                <div className={styles.divider}></div>
            </div>
        </div>
    )
}