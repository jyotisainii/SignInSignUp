// src/App.tsx
import React, { useContext } from 'react';
import { AuthContext } from './context/AuthContext';
import SignInForm from './components/SigninForm/SignInForm';
import SignUpForm from './components/SignupForm/SignUpForm';
import './styles/styles.scss';

const App: React.FC = () => {
    const authContext = useContext(AuthContext);

    if (!authContext) {
        return null; // Context should always be available
    }

    const { isSignedIn, toggleAuth } = authContext;

    return (
        <div className="app-container">
            {isSignedIn ? (
                <SignInForm toggleAuth={toggleAuth} />
            ) : (
                <SignUpForm toggleAuth={toggleAuth} />
            )}
        </div>
    );
};

export default App;
