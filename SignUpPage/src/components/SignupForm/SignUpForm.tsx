// src/components/SignUpForm/SignUpForm.tsx
import React, { useState } from 'react';
import InputField from '../Input/InputField';
import Button from '../Button/Button';
import '../SignupForm/SignupForm.scss';

interface SignUpFormProps {
    toggleAuth: () => void;
}

const SignUpForm: React.FC<SignUpFormProps> = ({ toggleAuth }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Add sign-up logic here
    };

    return (
        <form onSubmit={handleSubmit} className="signup-form">
            <h2>Sign Up</h2>
            <InputField label="Name" value={name} onChange={setName} />
            <InputField label="Email" type="email" value={email} onChange={setEmail} />
            <InputField label="Password" type="password" value={password} onChange={setPassword} />
            <Button type="submit">Sign Up</Button>
            <p>
                Already have an account?{' '}
                <span onClick={toggleAuth} className="toggle-link">
                    Sign In
                </span>
            </p>
        </form>
    );
};

export default SignUpForm;
