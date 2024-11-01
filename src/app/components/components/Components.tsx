// TODO remove
"use client";

import {useData} from "@/api/client";
import {Component} from "./Component";
import styled from "styled-components";
import {StatusOperational, StatusPartialOutage} from "./Status";
import {Skeleton} from "./Skeleton";
import {Stack} from "../Stack";

const Card = styled.div`
  box-shadow: 0px 0px 33px -32px rgba(0, 0, 0, 0.75);
  border-radius: 3px;
  background-color: ${(props) => props.theme.colors.content};
  padding: 16px;
  text-transform: capitalize;
`;

export const Components = () => {
    const {components, loading} = useData();

    return (
        <Card>
            {loading ? (<StatusOperational/>) : (
                components?.every(component => {
                    return component.status === "operational"
                }) ? (
                    <StatusOperational/>) : (
                    <StatusPartialOutage/>)
            )}
            <Stack>
                {loading ? (
                    <>
                        <Skeleton/>
                        <Skeleton/>
                        <Skeleton/>
                    </>
                ) : (
                    components.map((component) => (
                        <Component key={component.name} {...component} />
                    ))
                )}
            </Stack>
        </Card>
    );
};
