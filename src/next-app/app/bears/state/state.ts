import { create } from 'zustand';
import { subscribeWithSelector } from 'zustand/middleware';
import { withSelectorSubscription } from "@/util/zustand.util";
import { getForestStatus } from "./listeners";

export type BearState = {
    bears: number;
    increasePop: () => void;
    decreasePop: () => void;
    removeAllBears: () => void;
    updateBears: (newBears: number) => void;
    forestStatus: Promise<string | void>;
}

export const useBears = create(
    subscribeWithSelector<BearState>(
        (set) => ({
            bears: 0,
            increasePop: () => set((state) => ({ bears: state.bears + 1 })),
            decreasePop: () => set((state) => (state.bears ? { bears: state.bears - 1 } : {})),
            removeAllBears: () => set({ bears: 0 }),
            updateBears: (newBears: number) => set({ bears: newBears }),
            forestStatus: getForestStatus(),
        })
    )
);

withSelectorSubscription(useBears, 'bears', getForestStatus);
