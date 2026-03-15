import { ReactNode } from "react";


export type ListingProps<T> = {
    items: (T & { id :number | string })[],
    renderItem: (item: T) => ReactNode
}



export default function RowListing<T extends ReactNode>({ items, renderItem }: ListingProps<T>) {

    return (
        <ul className="flex flex-row gap-2 flex-wrap">
            {
                items
                    .map((item) => <li key={item.id}>{renderItem(item)}</li>)
            }
        </ul>
    )
}
