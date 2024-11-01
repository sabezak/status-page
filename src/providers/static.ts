import {IncidentType, Provider} from "@/api/types";
import {Auth} from "aws-amplify";

/**
 * You may use this as inspriation for a custom provider.
 */
export const staticProvider: Provider = {
    getComponents: async () => {
        const userCreds = await Auth.currentAuthenticatedUser()
        let response = await fetch(
            process.env.NEXT_PUBLIC_API_GATEWAY_HOST,
            {
                method: "GET",
                headers: {
                    "Authorization": "Bearer " + userCreds.signInUserSession?.idToken.jwtToken.toString(),
                },
            }
        );
        let currentStatuses = []

        if (response.ok) {
            currentStatuses = await response.json();
        } else {
            alert("Error HTTP: " + response.status + "\n" + response.statusText);
        }

        if (currentStatuses === undefined || currentStatuses.length == 0) {
            return [
                {
                    name: "organization",
                    status: "majorOutage"
                }
            ]
        }
        return currentStatuses.statuses;

    },
    getIncidents: () => [
        // {
        //     id: "1",
        //     title: "Major service outage",
        //     description: "_This is a major service outage_",
        //     createdAt: "2024-05-13T08:55:04.355Z",
        //     active: true,
        //     scheduled: false,
        // },
    ],
    getHistoricalIncidents: function ():
        | IncidentType[]
        | Promise<IncidentType[]> {
        return [
            // {
            //     id: "2",
            //     title: "Partial payments outage",
            //     description: "This is a partial payments outage",
            //     createdAt: "2024-05-13T08:55:04.355Z",
            //     active: false,
            //     scheduled: false,
            // },
        ];
    },
};
