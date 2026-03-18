"use client"

import { Header } from "@/components/header";
import { Page } from "@/components/page";
import React, { useCallback, useMemo } from "react";
import { useCats } from "@/app/cats/state/state";
import { CatDeploymentToggle } from "./cat-deployment-toggle";
import dynamic from "next/dynamic";

const CatListing = dynamic(
    () => import('./cat-list'),
    {
        loading: () => (
            <span className="flex flex-row items-center gap-2">
                <div className="w-4 h-4 border-4 border-t-transparent rounded-full animate-spin"/>
                <div>Loading cats...</div>
            </span>
        )
    }
);

export default function CatsContent() {

    const { cats, deployingCats, increasePop, decreasePop, removeAllCats, realizing } = useCats();

    const actions = useMemo(() => ([
        { label: 'Find me a cat', onClick: increasePop },
        { label: 'Adopt a cat', onClick: decreasePop },
        { label: 'Clear room', onClick: removeAllCats },
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

    const showCats = useCallback(() => {

        return deployingCats
            ? <CatListing/>
            : (
                <section className="flex flex-row gap-1 flex-wrap">
                    {
                        Array(cats)
                            .fill(undefined)
                            .map((_, indexAsKeyJustThisTime) => (
                                <span key={indexAsKeyJustThisTime}>{'🐱'}</span>
                            ))
                    }
                </section>
            );
    }, [ cats, deployingCats ]);

    return (
        <Page>
            <Header current={"Cats"}
                    direction={"left"}
                    to={{ label: "Bears", href: "/bears" }}/>
            <section>
                <p className="text-2xl">{realizing()}</p>
                {showCats()}
            </section>
            <section className="flex flex-row items-center justify-center gap-4">
                {showStateActions()}
                <CatDeploymentToggle>
                    <CatDeploymentToggle.Deploy/>
                    <CatDeploymentToggle.Undeploy/>
                </CatDeploymentToggle>
            </section>
        </Page>
    );
}


const styles = {
    btn: "mt-4 rounded-md bg-black px-4 py-2 text-white border cursor-pointer"
};
