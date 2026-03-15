import { suspended } from "@/components/suspended";
import React, {  use } from "react";
import { useBears } from "@/app/bears/state/state";


type BearsForestStatusProps = { noBearsMessage?: string };

export const BearsForestStatus = suspended<BearsForestStatusProps>(
    ({ noBearsMessage }) => {
        const { forestStatus } = useBears();
        const message: Awaited<string | undefined> = use(forestStatus);
        return (<span>{message || noBearsMessage}</span>);
    },
    <div>Loading forest status...</div>
);
