import BoxContainer from "../../components/BoxContainer";
import Divider from "../../components/Divider";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import MenuItem from "../../components/MenuItem";
import Page from "../../components/Page";
import styled from './Home.module.scss';

export default function Home() {
    return (
        <div className={styled.container}>
            <Header display="flex"></Header>
            <BoxContainer>
                <Page>
                    <p>HAHAHHAHAHHA</p>
                </Page>

                <Divider rotate={false}/>

                <Page>
                    <p>MUAHAHHAHAHHAHA</p>
                </Page>


                <div className={styled.container__menu}>
                    <MenuItem namepage='Cadastrar' iconSVG='src/assets/icons/icon_plus-outline.svg'/>
                    <MenuItem namepage='Armazém' iconSVG='src/assets/icons/icon_box.svg'/>
                    <MenuItem namepage='Perfil' iconSVG='src/assets/icons/icon_person.svg'/>
                    <MenuItem namepage='Sair' iconSVG='src/assets/icons/icon_exit.svg'/>
                </div>
            </BoxContainer>
            <Footer/>
        </div>
    )
}