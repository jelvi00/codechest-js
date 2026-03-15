import React, { Suspense } from "react";


export function suspended<T>(
    WrappedLoose: (props: T) => React.ReactElement<T>,
    fallback: React.ReactNode
) {

    return (props: T & React.Attributes) => {

        return (
            <Suspense fallback={fallback}>
                <WrappedLoose {...props} />
            </Suspense>
        );
    }

}
