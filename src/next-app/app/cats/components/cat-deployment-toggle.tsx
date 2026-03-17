import { CatState, useCats } from "@/app/cats/state/state";
import React, { useContext } from "react";

const CatContext = React.createContext<CatState | null>(null);

export function CatDeploymentToggle({ children }: React.PropsWithChildren) {

    return (
        <CatContext.Provider value={useCats()}>
            {children}
        </CatContext.Provider>
    );
}


CatDeploymentToggle.Deploy = function() {

    const { deployingCats, toggleCatsDeployment } = useContext(CatContext)!;

    return deployingCats ? (
        <button className={styles.btn} onClick={toggleCatsDeployment}>
            {"Deploy cats"}
        </button>
    ) : null;

}

CatDeploymentToggle.Undeploy = function() {

    const { deployingCats, toggleCatsDeployment } = useContext(CatContext)!;

    return !deployingCats ? (
        <button className={styles.btn} onClick={toggleCatsDeployment}>
            {"Undeploy cats"}
        </button>
    ) : null;

}

const styles = {
    btn: "mt-4 rounded-md bg-black px-4 py-2 text-white border cursor-pointer"
};
