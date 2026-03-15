export const doNothing = x => x;

export function wait(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
