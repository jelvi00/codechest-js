import { useBears } from "@/app/bears/state/state";
import { useMemo } from "react";
import Listing, { ListingProps } from "@/components/listing";
import { BearName } from "@/app/bears/components/bear-name";
import { containerized } from "@/components/containerized";


const BearsContainer = containerized<ListingProps<{ id: string }>>(Listing);

const withIdObject = () => ({ id: Math.random().toString(36).substring(2) })

export const BearsDisplay = () => {

    const { bears } = useBears();

    const sits = useMemo(() => Array(bears).fill(undefined).map(withIdObject), [ bears ]);

    return bears ? (
        <BearsContainer items={sits} renderItem={() => <BearName render={(name) => <span>🐻 {name}</span>}/>} />
    ) : null;
}
