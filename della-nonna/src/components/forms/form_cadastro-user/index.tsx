import { useState } from "react";
import InputText from "../../inputs/input_text";
import styled from './Form.module.scss';
import { useNavigate } from "react-router-dom";

interface FormData {
    name: string;
    email: string;
    password: string;
}

export default function FormCadastroUser() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        password: ''
    });

    const handleChange = (name: string, value: string) => {
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log(formData);

        try {
            const cadUser = await fetch('http://localhost:3000/cadastro-usuario', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
            });

            if (!cadUser.ok) {
                const data = await cadUser.json();
                throw new Error(data.error);
            }
    
        } catch (error) {
            alert(error);
        }

        navigate('/home');
    };
    

    return(
        <form className={styled.form} onSubmit={handleSubmit}>
            <h1 className={styled.form__title}>Cadastre-se</h1>

            <div className={styled.form__inputs}>
                <InputText
                    name="name"
                    value={formData.name}
                    type="text"
                    label="Nome"
                    placeholder="Insira seu nome"
                    onChange={(value) => handleChange('name', value)}
                />
                <InputText
                    name="email"
                    value={formData.email}
                    type="email"
                    label="E-mail"
                    placeholder="exemplo@dominio.com"
                    onChange={(value) => handleChange('email', value)}
                />
                <InputText
                    name="password"
                    value={formData.password}
                    type="password"
                    label="Senha"
                    placeholder="Insira uma senha forte"
                    onChange={(value) => handleChange('password', value)}
                />
            </div>

            <button className={styled.form__btn} type="submit">Cadastrar</button>
        </form>
    )
}