import React, { useContext, useRef, useState } from "react";
import { useCats } from "@/app/cats/state/state";

const CatAddContext = React.createContext<{ adding: boolean, setAdding: (adding: boolean) => void } | null>(null);

export function CatAddInput() {

    const [ adding, setAdding ] = useState<boolean>(false);

    return (
        <CatAddContext.Provider value={{ adding, setAdding }}>
            {adding ? <CatInput/> : <CatAddBtn/>}
        </CatAddContext.Provider>
    );
}


function CatInput() {

    const { setCats } = useCats();
    const { setAdding } = useContext(CatAddContext)!
    const inputRef = useRef<HTMLInputElement>(null);

    const applyCats = (data?: string) => {

        const input = data || inputRef.current?.value;

        if (input) {
            const value = parseInt((input) ?? '0');

            if (isNaN(value) || value < 0) setCats(0);
            else setCats(value);
        }

         if (data === undefined) setAdding(false);
    }

    return (
        <form className="flex flex-row items-center justify-center gap-2"
              onSubmit={(e) => {
                  e.preventDefault();
                  applyCats();
              }}>
            <input ref={inputRef}
                   className={styles.input}
                   placeholder={"Set cats"}
                   type="number"
                   //onChange={(e) => applyCats(e.target.value)}
            />
            <button className={styles.btn} type={"submit"}>
                {"Done"}
            </button>
        </form>
    )

}

function CatAddBtn() {

    const { setAdding } = useContext(CatAddContext)!;

    return (
        <button className={styles.btn} onClick={() => setAdding(true)}>
            {"Set cats"}
        </button>
    );

}

const styles = {
    btn: "mt-4 rounded-md bg-black px-4 py-2 text-white border cursor-pointer",
    input: "mt-4 rounded-md bg-black px-4 py-2 text-white border"
};
