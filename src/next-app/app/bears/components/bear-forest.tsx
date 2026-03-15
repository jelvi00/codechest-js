import { suspended } from "@/components/suspended";
import React, { use } from "react";
import { useBears } from "@/app/bears/state/state";


type BearsForestStatusProps = { noBearsMessage?: string };

export const BearForestStatus = suspended<BearsForestStatusProps>(
    ({ noBearsMessage }) => {
        const { forestStatus } = useBears();
        const message: Awaited<string | undefined> = use(forestStatus);
        return (<span>{message || noBearsMessage}</span>);
    },
    <>
        <span className="flex flex-row items-center gap-2">
            <div className="w-4 h-4 border-4 border-t-transparent rounded-full animate-spin"/>
            <div>Loading forest status...</div>
        </span>
    </>
);
