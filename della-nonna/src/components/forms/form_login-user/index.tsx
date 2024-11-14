import styled from './Form.module.scss';
import icon_logo from '../../../assets/images/Logo_Icon.svg';
import { useState } from 'react';
import InputText from '../../inputs/input_text';

interface FormData {
  email: string;
  password: string;
}

export default function FormLogin() {

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
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