import { StoreApi } from 'zustand';
import { wait } from "@/util";
import { BearState } from "./state";


export async function getForestStatus(state?: StoreApi<BearState>) {

    if (!state) return Promise.resolve(wait(2000)); //Default waiting anyway

    const { getState, setState } = state;

    const bears = getState()?.bears;

    setState({
        forestStatus: wait(2000)
            .then(() => bears
                ? (bears  > 4 ? 'Too many bears' : 'Bears are doing good')
                : undefined
            )
    });

}
