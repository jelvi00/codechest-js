import { io, ManagerOptions, SocketOptions, Socket } from "socket.io-client";
import { useEffect, useRef } from "react";

type UseSocketProps = {
    url: string,
    eventHandling: [ eventName: string, executor: () => void ][],
    opts?: Partial<ManagerOptions & SocketOptions> & { delay?: number}
}

export function useSocket({ url, eventHandling, opts }: UseSocketProps) {

    const socketRef = useRef<Socket>(null);

    const execQueue = useRef<(() => void)[]>([]);

    useEffect(() => {

        const execInterval = setInterval(() => {
            if (execQueue.current.length) execQueue.current.shift()?.();
        }, opts?.delay ?? 1000);

        console.log('connecting to socket', url);

        const socket = io(url, opts);

        eventHandling
            .forEach(([ eventName, executor ]) => socket.on(eventName, () => {
                execQueue.current.push(executor);
            }));

        socketRef.current = socket;

        return () => {
            socket.disconnect();
            clearInterval(execInterval);
        };
    }, []);

    return socketRef.current;

}
