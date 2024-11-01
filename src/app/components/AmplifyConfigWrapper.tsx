import React from 'react';
import { Amplify } from "aws-amplify";


Amplify.configure({
    Auth: {
        region: 'us-east-2',
        // userPoolId: 'us-east-2_2lfbiFKcr',
        userPoolId: process.env.NEXT_PUBLIC_USER_POOL_ID,
        // userPoolWebClientId: '12tccjqtl0qcm2tufepgeps580',
        userPoolWebClientId: process.env.NEXT_PUBLIC_USER_POOL_WEBCLIENT_ID,
        oauth: {
            // domain: 'dagster-sandbox-prod.auth.us-east-2.amazoncognito.com',
            domain: process.env.NEXT_PUBLIC_OAUTH_DOMAIN,
            scope: ['email', 'openid'],
            // redirectSignIn: 'https://sabezak.github.io/status-page/callback',
            redirectSignIn: process.env.NEXT_PUBLIC_OAUTH_REDIRECT_SIGNIN,
            // redirectSignOut: 'https://sabezak.github.io/status-page',
            redirectSignOut: process.env.NEXT_PUBLIC_OAUTH_REDIRECT_SIGNOUT,
            responseType: 'code',  // Используем Authorization Code Flow
        },
    },
});

const AmplifyConfigWrapper = ({children}: any) => {
    return <>{children}</>;
}

export default AmplifyConfigWrapper;
