// src/components/Input/InputField.tsx
import React from 'react';
import './InputField.scss';

interface InputFieldProps {
    label: string;
    type?: string;
    value: string;
    onChange: (value: string) => void;
}

const InputField: React.FC<InputFieldProps> = ({ label, type = 'text', value, onChange }) => {
    return (
        <div className="input-field">
            <label>{label}</label>
            <input type={type} value={value} onChange={(e) => onChange(e.target.value)} required />
        </div>
    );
};

export default InputField;
