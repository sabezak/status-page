"use client";

import {useEffect} from "react";
import {useRouter} from "next/navigation";
import {Auth} from "aws-amplify";


export default function Home() {
    const router = useRouter();

    useEffect(() => {
        Auth.currentAuthenticatedUser()
            .then(user => {
                router.push('/dashboard');
            })
            .catch(() => {
                router.push('/login');
            });
    }, [router]);

    return <div>Redirecting...</div>; // Можно добавить сообщение о редиректе
}