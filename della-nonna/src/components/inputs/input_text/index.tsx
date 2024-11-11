import { useState } from 'react';
import styled from './Input.module.scss';

interface InputProps {
    name: string;
    value: string;
    type: string;
    onChange: (value: string) => void;
}

export default function InputText(props: InputProps) {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        props.onChange(e.target.value);
    };
    return (
        <div className="input">
            <label htmlFor={props.name}>{props.name}</label>
            <input 
                type={props.type} 
                id={props.name}
                name={props.name}
                value={props.value} 
                onChange={handleChange}
                required
            />
        </div>
    );
}
