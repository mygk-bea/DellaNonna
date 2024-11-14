import BoxContainer from "../../components/common/BoxContainer";
import Divider from "../../components/common/Divider";
import Page from "../../components/common/Page";
import FormCadastroUser from "../../components/forms/form_cadastro-user";
import FormLogin from "../../components/forms/form_login-user";
import styled from './Login.module.scss';

export default function Login() {
    return (
        <div className={`container ${styled.container__login}`}>
            <div className={styled.content}>
                <BoxContainer>
                    <Divider horizontal={true}/>
                    <Page>
                        <FormCadastroUser/>
                    </Page>
                </BoxContainer>
                <BoxContainer>
                    <Divider/>
                    <FormLogin/>
                </BoxContainer>
            </div>
        </div>
    )
}