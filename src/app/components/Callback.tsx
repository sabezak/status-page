"use client";

import React, {useEffect} from 'react';
import {useRouter} from "next/navigation";
import {Auth} from "aws-amplify";


const Callback = () => {
    const router = useRouter();

    useEffect(() => {
        Auth.currentAuthenticatedUser()
            .then(() => {
                console.log('User authenticated');
                router.push("/dashboard");
            })
            .catch((err) => {
                console.log('User not signed in', err);
                router.push('/');
            });
    }, []);



    return <div>Signing you in...</div>;
}

export default Callback;