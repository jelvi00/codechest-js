//Not default exported, manual dep change required.
import { StoreSubscribeWithSelector } from "zustand/middleware/subscribeWithSelector";
import { StoreApi } from "zustand";

type StoreWithSelector<T> = StoreApi<T> & StoreSubscribeWithSelector<T>;

export function withSelectorSubscription<T>(
    store: StoreWithSelector<T>,
    selector: keyof T,
    listener: (store?: StoreWithSelector<T>, previousState?: T[keyof T]) => Promise<unknown>
) {
    store.subscribe(
        (state) => state[selector],
        (_, previousState) => listener(store, previousState)
    );
}
