import { useState } from "react";
import InputText from "../../inputs/input_text";

interface FormData {
    name: string;
    email: string;
    password: string;
}

export default function FormCadastroUser() {

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

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(formData);
    };

    return(
        <form onSubmit={handleSubmit}>

            <InputText
                name="name"
                value={formData.name}
                type="text"
                onChange={(value) => handleChange('name', value)}
            />
            <InputText
                name="email"
                value={formData.email}
                type="email"
                onChange={(value) => handleChange('email', value)}
            />
            <InputText
                name="password"
                value={formData.password}
                type="password"
                onChange={(value) => handleChange('password', value)}
            />

            <button type="submit">Enviar</button>
        </form>
    )
}