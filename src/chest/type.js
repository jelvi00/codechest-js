export const getType = (value) => {
    const match = Object.prototype.toString.call(value).match(/ (\w+)]/)
    return match[1].toLocaleLowerCase()
}