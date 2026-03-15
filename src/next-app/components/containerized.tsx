import React from "react";


export function containerized<T>(Wrapped: React.ElementType) {

    return (props: T) => (
        <div className={'border-2 border-white p-2 radius-2'}>
            <Wrapped {...props}/>
        </div>
    )
}
