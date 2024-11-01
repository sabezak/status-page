import React from 'react';
import { Amplify } from "aws-amplify";


Amplify.configure({
    Auth: {
        region: 'us-east-2',  // Укажите регион вашего Cognito User Pool
        userPoolId: 'us-east-2_2lfbiFKcr',  // Ваш Cognito User Pool ID
        userPoolWebClientId: '12tccjqtl0qcm2tufepgeps580',  // Client ID приложения в Cognito
        oauth: {
            domain: 'dagster-sandbox-prod.auth.us-east-2.amazoncognito.com',
            scope: ['email', 'openid'],
            redirectSignIn: 'https://sabezak.github.io/status-page/callback',
            redirectSignOut: 'https://sabezak.github.io/status-page',
            responseType: 'code',  // Используем Authorization Code Flow
        },
    },
    Logging: {    level: 'DEBUG',}
});

// Enable debug logging
// window.LOG_LEVEL = 'DEBUG';

// Amplify.Logger.LOG_LEVEL = 'DEBUG';

const AmplifyConfigWrapper = ({children}: any) => {
    return <>{children}</>;
}

export default AmplifyConfigWrapper;
