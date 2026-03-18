import { create } from 'zustand';
import { subscribeWithSelector } from 'zustand/middleware';
import { withSelectorSubscription } from "@/util/zustand.util";
import { deployCats } from "./listeners";
import { useReducer } from "react";

export type CatState = {
    cats: number;
    deployingCats: boolean;
    increasePop: () => void;
    decreasePop: () => void;
    removeAllCats: () => void;
    realizing: () => string;
    toggleCatsDeployment: () => void;
    deployedCats: Promise<unknown[] | void>;
}

export const useCats = create(
    subscribeWithSelector<CatState>(
        (set, get) => ({
            cats: 0,
            deployingCats: false,
            increasePop: () => set((state) => ({ cats: state.cats + 1 })),
            decreasePop: () => set((state) => (state.cats ? { cats: state.cats - 1 } : {})),
            removeAllCats: () => set({ cats: 0 }),
            realizing: () => get().cats > 4 ? "Cats will rule the world." : "Not that much cats.",
            toggleCatsDeployment: () => set({ deployingCats: !get().deployingCats }),
            deployedCats: deployCats()
        })
    )
);

withSelectorSubscription(useCats, 'cats', deployCats);
withSelectorSubscription(useCats, 'deployingCats', deployCats);

useCats.subscribe((state, prevState) => console.log("cats state updated"));


//const [ { cats }, dispatch ] = withCatsReducer();
export const withCatsReducer = () => {

    const initialState = { cats: 0 };

    const actions = {
        'increment': (state: typeof initialState) => ({ cats: state.cats + 1}),
        'decrement': (state: typeof initialState) => ({ cats: state.cats - 1}),
        'clear': () => initialState,
    };

    return useReducer(
        (state, action: { type: keyof typeof actions }) => actions[action.type](state) ?? state,
        initialState
    );

}
