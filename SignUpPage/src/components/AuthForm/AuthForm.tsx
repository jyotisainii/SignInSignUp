// src/components/AuthForm.tsx
import React from 'react';
import SignInForm from '../SigninForm/SignInForm';
import SignupForm from '../SignupForm/SignUpForm';

interface AuthFormProps {
    isSignIn: boolean;
}

const AuthForm: React.FC<AuthFormProps> = ({ isSignIn }) => {
    return <>{isSignIn ? <SignInForm toggleAuth={function (): void {
        throw new Error('Function not implemented.');
    } } /> : <SignupForm toggleAuth={function (): void {
            throw new Error('Function not implemented.');
        } } />}</>;
};

export default AuthForm;
