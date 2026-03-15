import { useRouter } from "next/navigation";
import { useTransition } from "react";

type HeaderProps = {
    current: string;
    direction: 'left' | 'right';
    to: { href: string, label: string }
};

export function Header({ current, direction, to }: HeaderProps) {

    const router = useRouter();

    const [isTransitionPending, startTransition] = useTransition();

    const arrow = direction === 'left' ? '<-' : '->';

    const getActionBtn = () => (
        <button className="cursor-pointer"
                disabled={isTransitionPending}
                onClick={() => startTransition(() => router.push(to.href))}>
            <h1 className="text-4xl px-4 py-2 rounded-md font-bold border">{to.label}</h1>
        </button>
    );

    const [ left, right ] = ['left', 'right']
        .map((way) => direction === way
            ? getActionBtn()
            : <h1 className="text-4xl font-bold">{current}</h1>
        );

    return (
        <section className="flex flex-row items-center justify-center gap-4">
            {left}
            <h1 className="text-4xl font-bold">{arrow}</h1>
            {right}
        </section>
    );
}
