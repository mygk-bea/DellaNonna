import styled from './Form.module.scss';
import icon_logo from '../../../assets/images/Logo_Icon.svg';
import { useState } from 'react';
import InputText from '../../inputs/input_text';
import { useNavigate } from 'react-router-dom';

interface FormData {
  email: string;
  password: string;
}

export default function FormLogin() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState<FormData>({
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
      const login = await fetch('http://localhost:3000/login-usuario', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      const result = await login.json();
      // objeto vindo do backEnd com os dados do usuário
      console.log('Resultado do login:', result);
  
      if (!login.ok) {
        throw new Error(result.error);
      }
  
      if (result.user) {
        localStorage.setItem('user', JSON.stringify(result.user));
      }
  
    } catch (error) {
      alert(error);
    }

    navigate('/home');
  };

  return (
    <form className={styled.form} onSubmit={handleSubmit}>
      <div className={styled.form__img}>
        <img src={icon_logo} alt="" />
        <h1 className={styled.form__title}>Della Nonna</h1>
      </div>

      <div className={styled.form__inputs}>
        <InputText
          name='email'
          value={formData.email}
          type='email'
          label='E-mail'
          placeholder='exemplo@dominio.com'
          onChange={(value) => handleChange('email', value)}
        />
        <InputText
          name='password'
          value={formData.password}
          type='password'
          label='Senha'
          placeholder='Insira sua senha'
          onChange={(value) => handleChange('password', value)}
        />
      </div>

      <button className={styled.form__btn} type="submit">Entrar</button>
    </form>
  )
}