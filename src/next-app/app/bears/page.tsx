"use client"

import { useBears } from "@/app/bears/state/state";
import React, { Suspense, useCallback, useMemo } from "react";
import { BearsDisplay } from "@/app/bears/components/bears-display";
import { BearForestStatus } from "@/app/bears/components/bear-forest";
import { Header } from "@/components/header";
import { Page } from "@/components/page";

export default function Bears() {

    const { bears, increasePop, decreasePop, removeAllBears, updateBears } = useBears();

    const actions = useMemo(() => ([
        { label: 'Buy me a bear', onClick: increasePop },
        { label: 'Get a bear', onClick: decreasePop },
        { label: 'Clear forest', onClick: removeAllBears },
        { label: 'There are 2 bears', onClick: () => updateBears(2) },
    ]), []);

    const showStateActions = useCallback(() => {
        return actions.map(({ label, onClick }, index) => (
            <button key={'_' + index}
                    className={styles.btn}
                    onClick={onClick}>
                {label}
            </button>
        ));
    }, [ actions ]);

    return (
        <Page>
            <Header
                current={"Bears"}
                direction={"right"}
                to={{ label: "Cats", href: "/cats" }}/>
            <p className="text-2xl">There {bears != 1 ? 'are' : 'is'} {bears} bear{bears != 1 ? 's' : ''} in the forest.</p>
            <BearsDisplay/>
            <Suspense fallback={<div>Loading forest status...</div>}>
                <BearForestStatus noBearsMessage={'No bears in the forest'}/>
            </Suspense>
            <section className="flex flex-row items-center justify-center gap-4">
                {showStateActions()}
            </section>
        </Page>
    );
}

const styles = {
    btn: "mt-4 rounded-md bg-black px-4 py-2 text-white border cursor-pointer"
};
