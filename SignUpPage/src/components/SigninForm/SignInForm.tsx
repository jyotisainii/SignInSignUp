// src/components/SignInForm/SignInForm.tsx
import React, { useState } from 'react';
import InputField from '../Input/InputField';
import Button from '../Button/Button';
import './SignInForm.scss';

interface SignInFormProps {
    toggleAuth: () => void;
}

const SignInForm: React.FC<SignInFormProps> = ({ toggleAuth }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Add sign-in logic here
    };

    return (
        <form onSubmit={handleSubmit} className="signin-form">
            <h2>Sign In</h2>
            <InputField label="Username" value={username} onChange={setUsername} />
            <InputField label="Password" type="password" value={password} onChange={setPassword} />
            <Button type="submit">Sign In</Button>
            <p>
                Don't have an account?{' '}
                <span onClick={toggleAuth} className="toggle-link">
                    Sign Up
                </span>
            </p>
        </form>
    );
};

export default SignInForm;
