"use client"

import { useBears } from "@/app/bears/state/state";
import React, { Suspense, useCallback, useMemo } from "react";
import { BearsDisplay } from "@/app/bears/components/bears-display";
import { BearsForestStatus } from "@/app/bears/components/bear-forest";

export default function Bears() {

    const { bears, increasePop, decreasePop, removeAllBears, updateBears } = useBears();

    const actions = useMemo(() => ([
        { label: 'Buy me a bear', onClick: increasePop },
        { label: 'Get a bear', onClick: decreasePop },
        { label: 'Clear forest', onClick: removeAllBears},
        { label: 'There are 2 bears', onClick: () => updateBears(2)},
    ]), []);

    const showStateActions = useCallback(() => {
        return actions.map(({ label, onClick }, index) => (
            <button key={'_' + index}
                    className={styles.buy_button}
                    onClick={onClick}>
                {label}
            </button>
        ));
    }, [ actions ]);



    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <h1 className="text-4xl font-bold">Bears</h1>
                <p className="text-2xl">There are {bears} bears in the forest.</p>
                <BearsDisplay/>
                <Suspense fallback={<div>Loading forest status...</div>}>
                    <BearsForestStatus noBearsMessage={'No bears in the forest'}/>
                </Suspense>
                <section className="flex flex-row items-center1 justify-center gap-4">
                    {showStateActions()}
                </section>
            </main>
        </div>
    );
}

const styles = {
    page: "flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black",
    main: "flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start",
    buy_button: "mt-4 rounded-md bg-black px-4 py-2 text-white, border"
};
