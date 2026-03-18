"use client"

import { useCats } from "@/app/cats/state/state";
import Image from 'next/image'
import { use } from "react";

type Cat = {
    id: string;
    url: string;
}

export default function CatList() {

    const { cats: count, deployedCats } = useCats();

    const cats = use(deployedCats);

    return (
        <div className="flex flex-row items-center justify-center gap-2">
            {
                cats
                    ?.filter(isCat)
                    .splice(0, count)
                    .map((cat) => (<Image key={cat.id} width={100} height={100} src={cat.url} alt={"cat"}/>))
            }
        </div>
    );
}


const isCat = (cat: unknown) : cat is Cat  => 'url' in (cat as object)
