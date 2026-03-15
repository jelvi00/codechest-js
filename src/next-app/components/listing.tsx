import { ReactNode } from "react";


export type ListingProps<T> = {
    items: (T & { id :number | string })[],
    renderItem: (item: T) => ReactNode
}



export default function Listing<T extends ReactNode>({ items, renderItem }: ListingProps<T>) {

    return (
        <ul className="flex flex-row gap-2">
            {
                items
                    .map((item) => <li key={item.id}>{renderItem(item)}</li>)
            }
        </ul>
    )
}
