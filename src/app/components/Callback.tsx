"use client";

import React, {useEffect} from 'react';
import {useRouter} from "next/navigation";
import {Auth} from "aws-amplify";


const Callback = () => {
    const router = useRouter();

    useEffect(() => {
        // После редиректа автоматически проверим, вошел ли пользователь
        Auth.currentAuthenticatedUser()
            .then((user) => {
                console.log('User authenticated:', user);
                // Перенаправляем на главную страницу или защищенную страницу
                router.push("/dashboard");
            })
            .catch((err) => {
                console.log('User not signed in');
                // Перенаправление на страницу входа, если авторизация не удалась
                router.push('/');
            });
    }, []);



    return <div>Signing you in...</div>;
}

export default Callback;