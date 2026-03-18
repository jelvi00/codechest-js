import { StoreApi } from 'zustand';
import { CatState } from "./state";


export async function deployCats(
    state?: StoreApi<CatState>,
    previous?: CatState[keyof CatState]
) {

    if (!state) return;

    const { getState, setState } = state;

    const { cats, deployingCats } = getState();

    let deployedCats;

    //cats changed
    if (typeof previous === 'number') {

        if (deployingCats) {
            if (cats) deployedCats = getCats(cats)
            else deployedCats = Promise.resolve();
        }

    //deployingCats changed
    } else if (typeof previous === 'boolean') {

        if (cats) {
            if (deployingCats) deployedCats = getCats(cats)
            else deployedCats = Promise.resolve();
        }

    }

    if (deployedCats) setState({ deployedCats });

}


function getCats(cats: number): Promise<unknown[]> {
    return fetch(`https://api.thecatapi.com/v1/images/search?limit=${cats}`)
        .then(res => res.json());
}
