import React from "react";


export function Page({ children }: React.PropsWithChildren) {

    return (
        <div className={styles.page}>
            <main className={styles.main}>
                {children}
            </main>
        </div>
    );
}

const styles = {
    page: "flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black",
    main: "flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start",
};
