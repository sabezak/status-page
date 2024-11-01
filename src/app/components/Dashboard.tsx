"use client"

import React, {useEffect, useState} from 'react';
import {Incidents} from "@/app/components/incidents/Incidents";
import {Components} from "@/app/components/components/Components";
import {HistoricalIncidents} from "@/app/components/incidents/HistoricalIncidents";
import { Auth } from 'aws-amplify';
import {useRouter} from "next/navigation";
import {DataProvider} from "@/api/client";

const Dashboard = () => {
    const router = useRouter();

    useEffect(() => {
        Auth.currentAuthenticatedUser()
            .then((user) => {
                console.log('User authenticated:', user);
            })
            .catch((error) => {
                console.log(error)
                router.push('/login');
            });
    }, [router]);

    return (
        <DataProvider>
            <Incidents />
            <Components />
            <HistoricalIncidents />
        </DataProvider>
    );
};

export default Dashboard;