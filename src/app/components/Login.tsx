"use client"

import React from 'react';
import {Auth} from "aws-amplify";
import {CognitoHostedUIIdentityProvider} from "@aws-amplify/auth/src/types/Auth";

const Login = () => {
    const handleLogin = () => {
        Auth.federatedSignIn({ provider: 'COGNITO' as CognitoHostedUIIdentityProvider });  // Инициирует вход через Cognito (включая Azure AD)
    };

    return (
        <div>
            <h1>Welcome to Syberry Status Page</h1>
            <button onClick={handleLogin}>Sign in with Azure AD</button>
        </div>
    );
};


export default Login;