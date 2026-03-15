import { StoreApi } from 'zustand';
import { CatState } from "./state";


export async function deployCats(state?: StoreApi<CatState>) {

    if (!state) return;

    const { getState, setState } = state;

    const { cats, deployedCats } = getState();

    //do append or remove cats if deployedCats exists.
    setState({
        deployedCats: Promise.resolve([])
    });

}
